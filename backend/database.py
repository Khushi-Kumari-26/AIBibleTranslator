from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# ✅ Use lowercase DB name (PostgreSQL converts names to lowercase unless quoted)
DATABASE_URL = "postgresql://Khushi.Kumari:4567@localhost:5432/bibletranslatorai"

engine = create_engine(DATABASE_URL, echo=True)  # echo=True will show SQL in console
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# ✅ Add this function!
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()