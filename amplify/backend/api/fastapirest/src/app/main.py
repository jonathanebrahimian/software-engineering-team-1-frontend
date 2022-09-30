# main.py

from typing import Optional
from fastapi import FastAPI
import boto3

client = boto3.client('dynamodb',region_name='us-east-2')
app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/dev")
def tables():
    response = client.put_item(TableName='Classes',  Item={'fruitName':{'S':'Banana'},'key2':{'N':'value2'}})
    print("here is the get")
    print(response)
    return response

@app.get("/dev")
def tables():
    response = client.put_item(TableName='Classes-dev',  Item={'fruitName':{'S':'Banana'},'key2':{'N':'value2'}})
    print("here is the get")
    print(response)
    return response


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}
