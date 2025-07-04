from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, Response
import os
import requests

# Local imports
import models
import database
import deps
from deps import get_current_user
from database import SessionLocal
from auth import router as auth_router
from upload import router as upload_router
from auth import get_current_user

# --------------------------
# App setup (no admin creation now)
# --------------------------
@asynccontextmanager
async def lifespan(app: FastAPI):
    print("✅ App started, no auto admin creation")
    yield

app = FastAPI(
    title="Your API",
    description="JWT-secured translation service",
    version="1.0",
    lifespan=lifespan
)

# --------------------------
# Middleware (CORS)
# --------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------------
# DB Tables
# --------------------------
models.Base.metadata.create_all(bind=database.engine)

# --------------------------
# Routers
# --------------------------
app.include_router(auth_router)
app.include_router(upload_router)

# --------------------------
# Protected Example Routes
# --------------------------
@app.get("/translate")
def get_translation(current_user=Depends(get_current_user)):
    return {
        "message": f"This is your translation area, {current_user.email}",
        "role": current_user.role
    }

@app.post("/translations/")
def add_translation(
    original_text: str,
    translated_text: str,
    language: str,
    db: Session = Depends(deps.get_db),
    current_user=Depends(get_current_user)
):
    new_translation = models.Translation(
        original_text=original_text,
        translated_text=translated_text,
        language=language
    )
    db.add(new_translation)
    db.commit()
    db.refresh(new_translation)
    return {
        "message": "Translation added successfully",
        "translation": {
            "original": original_text,
            "translated": translated_text,
            "language": language
        }
    }

# --------------------------
# Vachan API Proxy Endpoint
# --------------------------
@app.get("/vachan/verse")
def get_verse(book: str, chapter: int, verse: int, lang_code: str = "eng", current_user=Depends(get_current_user)):
    try:
        url = f"https://vachan.bible/api/v1/bibles/{lang_code}/verses/{book}.{chapter}.{verse}"
        response = requests.get(url)
        if response.status_code != 200:
            raise HTTPException(status_code=404, detail="Verse not found in Vachan API")
        return response.json()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# --------------------------
# Authenticated User Info
# --------------------------
@app.get("/users/me")
def read_users_me(current_user=Depends(get_current_user)):
    return {
        "id": current_user.id,
        "email": current_user.email,
        "role": current_user.role
    }

# --------------------------
# Serve USFM Files (secure)
# --------------------------
# from fastapi.responses import Response, FileResponse
from fastapi.responses import StreamingResponse

@app.get("/usfm-files/{filename}")
def get_usfm_file(filename: str, current_user=Depends(get_current_user)):
    file_path = os.path.join("uploaded_usfm_files", filename)

    if not os.path.isfile(file_path):
        raise HTTPException(status_code=404, detail="File not found")

    def file_iterator():
        with open(file_path, "rb") as f:
            yield from f

    return StreamingResponse(
        file_iterator(),
        media_type="text/plain",
        headers={"Access-Control-Allow-Origin": "*"}
    )