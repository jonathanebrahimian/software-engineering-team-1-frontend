# main.py

from typing import Optional, Union, List
from fastapi import FastAPI
import boto3
import os
from pydantic import BaseModel
from datetime import datetime

class Labs(BaseModel):
    start_time: datetime
    end_time: datetime

class Class(BaseModel):
    class_id: str
    description: Union[str, None] = None
    labs: List[Labs] = []

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

@app.get("/classes")
def tables(class_id: str):
    response = classes_table.get_item(Key={'class_id':class_id})
    return response['Item']

@app.post("/classes")
def classes(item: Class):
    item = item.dict()
    for x in item['labs']:
        x['start_time'] = x['start_time'].isoformat()
        x['end_time'] = x['end_time'].isoformat()

    return classes_table.put_item(Item=item)
