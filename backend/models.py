from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
import uuid
from sqlalchemy.orm import relationship
from uuid import uuid4
from datetime import datetime, timezone
from database import Base


class Translation(Base):
    __tablename__ = "translations"

    id = Column(Integer, primary_key=True, index=True)
    original_text = Column(Text, nullable=False)
    translated_text = Column(Text, nullable=False)
    language = Column(String(50))
    created_at = Column(DateTime, default=datetime.now(timezone.utc))


class User(Base):
    __tablename__ = "users"

    # id = Column(Integer, primary_key=True, index=True)
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    role = Column(String, nullable=False)


class BibleSource(Base):
    __tablename__ = "bible_sources"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    language = Column(String, nullable=False)
    version = Column(String, nullable=False)
    file_name = Column(String, nullable=False)
    uploaded_by = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    created_at = Column(DateTime, default=datetime.now(timezone.utc))

    uploader = relationship("User", backref="bible_sources")


class BibleToken(Base):
    __tablename__ = "bible_tokens"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    source_id = Column(UUID(as_uuid=True), ForeignKey("bible_sources.id"), nullable=False)
    book = Column(String(50))
    chapter = Column(Integer)
    verse = Column(Integer)
    token_order = Column(Integer)
    token_text = Column(Text)  # ✅ Correct field name
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
class Project(Base):
    __tablename__ = "projects"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    file_name = Column(String, nullable=False)
    
    
    assigned_to = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    created_by = Column(UUID(as_uuid=True), ForeignKey("users.id"))

    created_at = Column(DateTime, default=datetime.now(timezone.utc))

    assigned_user = relationship("User", foreign_keys=[assigned_to])
    admin_user = relationship("User", foreign_keys=[created_by])
