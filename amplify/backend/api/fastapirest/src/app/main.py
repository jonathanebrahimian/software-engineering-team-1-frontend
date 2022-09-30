# main.py

from typing import Optional
from fastapi import FastAPI
import boto3

client = boto3.resource('dynamodb',region_name='us-east-2')
app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/tables")
def tables():
    print("resources")
    table = client.Table('Classes-dev')
    response = table.put_item(Item={'class_id':'CS 43451','description':'this is a description'})
    print(response)
    return response

@app.get("/see")
def see():
    print("here is the put")
    table = client.Table('Classes-dev')
    response = table.get_item(Key={'class_id':'CS 43451'})
    print(response)
    return response

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}
