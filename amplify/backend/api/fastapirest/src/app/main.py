# main.py

from typing import Optional
from fastapi import FastAPI
import boto3
import os



from typing import Union, List
from pydantic import BaseModel
import datetime

# class Labs(BaseModel):
#     start_time: datetime
#     end_time: datetime

# class Item(BaseModel):
#     class_id: str
#     description: Union[str, None] = None
#     labs: List[Labs] = []
#     tax: Union[float, None] = None

ENV = os.environ.get("ENV","local")

if ENV == "local":
    client = boto3.resource('dynamodb',aws_access_key_id="anything",
                          aws_secret_access_key="anything",
                          region_name="us-west-2",endpoint_url='http://dynamodb-local:8000')
else:
    client = boto3.resource('dynamodb',region_name='us-east-2')

classes_table = client.Table('Classes-dev')

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World!!"}

@app.get("/tables")
def tables():
    print("resources")
    response = classes_table.put_item(Item={'class_id':'CS 43451','description':'this is a description'})
    print(response)
    return response

@app.post("/classes")
def classes():
    pass

@app.get("/see")
def see():
    print("here is the put")
    response = classes_table.get_item(Key={'class_id':'CS 43451'})
    print(response)
    return response

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}



