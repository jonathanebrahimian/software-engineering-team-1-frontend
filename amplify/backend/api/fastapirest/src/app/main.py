# main.py

from typing import Optional
from fastapi import FastAPI
import boto3

client = boto3.client('dynamodb',region_name='us-east-2')
app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/tables")
def tables():
    result = client.list_tables()
    print(result)
    return result


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}
