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
    print("here is the get")
    response = client.put_item(TableName='Classes-dev', Item={'name':'CS 43451','description':'this is a description'})
    print(response)
    return response

@app.get("/see")
def see():
    print("here is the put")
    response = client.get_item(TableName='Classes-dev', Key={'name':'CS 43451'})
    print(response)
    return response

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}
