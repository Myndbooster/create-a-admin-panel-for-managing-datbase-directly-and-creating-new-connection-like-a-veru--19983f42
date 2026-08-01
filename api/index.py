import os
from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

SECRET_KEY = os.environ.get('SECRET_KEY')
DATABASE_URL = os.environ.get('DATABASE_URL')

# Mock database
connections_db = {}
records_db = {}
next_connection_id = 1
next_record_id = 1

class User(BaseModel):
    username: str
    password: str

class Connection(BaseModel):
    id: str
    name: str
    details: str

class CreateConnection(BaseModel):
    name: str
    details: str

class Record(BaseModel):
    id: str
    data: Dict[str, str]

class CreateRecord(BaseModel):
    record: Dict[str, str]

class SuccessResponse(BaseModel):
    success: bool

class TokenResponse(BaseModel):
    token: str

@app.post('/api/login', response_model=TokenResponse)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    if form_data.username == "admin" and form_data.password == "password":  # Replace with actual authentication
        return TokenResponse(token="mock-token")
    raise HTTPException(status_code=400, detail="Invalid credentials")

@app.post('/api/connections', response_model=Connection)
async def create_connection(connection: CreateConnection):
    global next_connection_id
    connection_id = str(next_connection_id)
    connections_db[connection_id] = connection
    connections_db[connection_id].id = connection_id
    next_connection_id += 1
    return connections_db[connection_id]

@app.get('/api/connections', response_model=List[Connection])
async def get_connections():
    return [conn for conn in connections_db.values()]

@app.get('/api/connections/{id}', response_model=Connection)
async def get_connection(id: str):
    connection = connections_db.get(id)
    if not connection:
        raise HTTPException(status_code=404, detail="Connection not found")
    return connection

@app.post('/api/connections/{id}/records', response_model=SuccessResponse)
async def add_record(id: str, record: CreateRecord):
    global next_record_id
    if id not in connections_db:
        raise HTTPException(status_code=404, detail="Connection not found")
    record_id = str(next_record_id)
    record_data = record.record
    records_db[record_id] = record_data
    next_record_id += 1
    return SuccessResponse(success=True)

@app.put('/api/connections/{id}/records/{recordId}', response_model=SuccessResponse)
async def edit_record(id: str, recordId: str, record: CreateRecord):
    if id not in connections_db:
        raise HTTPException(status_code=404, detail="Connection not found")
    if recordId not in records_db:
        raise HTTPException(status_code=404, detail="Record not found")
    records_db[recordId] = record.record
    return SuccessResponse(success=True)