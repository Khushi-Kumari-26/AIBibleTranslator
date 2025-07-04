from fastapi import APIRouter, File, UploadFile, Depends, HTTPException, Form
from sqlalchemy.orm import Session
import shutil
import os
from datetime import datetime, timezone
from models import Project
from models import Project, User
from deps import get_current_user, get_db
# from usfm_parser import tokenize_usfm
from deps import get_current_user, get_db
from models import User, BibleSource, BibleToken
# from usfm_parser import parse_usfm_text
from fastapi.responses import JSONResponse
import os
from pydantic import BaseModel

class ProjectCreateRequest(BaseModel):
    file_name: str
    user_email: str
router = APIRouter()

@router.get("/usfm-files")
def list_uploaded_files(current_user: User = Depends(get_current_user)):
    if current_user.role not in ["admin", "user"]:
        raise HTTPException(status_code=403, detail="Unauthorized")

    files = []
    folder = "uploaded_usfm_files"
    if os.path.exists(folder):
        files = os.listdir(folder)

    return {"files": files}



UPLOAD_FOLDER = "uploaded_usfm_files"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@router.post("/upload-usfm/")
def upload_usfm_file(
    file: UploadFile = File(...),
    language: str = Form("en"),
    version: str = Form("default"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Only admins can upload files")

    # Save file to local folder
    file_location = os.path.join(UPLOAD_FOLDER, file.filename)
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Read USFM content
    with open(file_location, "r", encoding="utf-8") as f:
        usfm_text = f.read()

    # Extract book ID from \id line
    book_line = next((line for line in usfm_text.splitlines() if line.startswith("\\id")), None)
    book_id = book_line.split(" ")[1].strip() if book_line else "UNKNOWN"

    # Save the uploaded file metadata
    new_source = BibleSource(
        language=language,
        version=version,
        file_name=file.filename,
        uploaded_by=current_user.id,
        created_at=datetime.now(timezone.utc)
    )

    db.add(new_source)
    db.commit()
    db.refresh(new_source)

    # Tokenize USFM content
    # tokens = tokenize_usfm(usfm_text, book_id, new_source.id)

    # # Save tokens to DB
    # for token in tokens:
    #     db_token = BibleToken(**token)
    #     db.add(db_token)

    # db.commit()

    # return {
    #     "message": "USFM file uploaded and tokenized successfully",
    #     "tokens_saved": len(tokens),
    #     "file_id": new_source.id
    # }

@router.get("/projects/me")
def get_user_projects(current_user: User = Depends(get_current_user),
                      db: Session = Depends(get_db)):
    return db.query(Project).filter(Project.assigned_to == current_user.id).all()


@router.get("/users")
def get_users(db: Session = Depends(get_db), role: str = None):
    query = db.query(User)
    if role:
        query = query.filter(User.role == role)
    return query.all()
@router.post("/projects/create")
def create_project(
    project: ProjectCreateRequest,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Only admin can assign projects")

    user = db.query(User).filter(User.email == project.user_email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    new_project = Project(
        file_name=project.file_name,
        assigned_to=user.id,
        created_by=current_user.id,
        created_at=datetime.utcnow()
    )
    db.add(new_project)
    db.commit()
    db.refresh(new_project)
    return {"message": f"Project '{project.file_name}' assigned to {user.email}"}

@router.get("/my-projects")
def get_my_projects(current_user=Depends(get_current_user), db: Session = Depends(get_db)):
    projects = db.query(Project).filter(Project.assigned_to == current_user.id).all()

    print(f"📂 Projects assigned to {current_user.email}:")
    for p in projects:
        print("  ↪️", p.file_name)

    return {"projects": [p.file_name for p in projects]}

# @router.get("/parse-usfm/{filename}")
# def parse_usfm_file(filename: str, current_user=Depends(get_current_user)):
#     file_path = os.path.join("uploaded_usfm_files", filename)
#     if not os.path.exists(file_path):
#         raise HTTPException(status_code=404, detail="File not found")

#     with open(file_path, 'r', encoding='utf-8') as f:
#         content = f.read()

#     try:
#         parsed_data = parse_usfm_text(content)
#         return JSONResponse(content=parsed_data)
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))
