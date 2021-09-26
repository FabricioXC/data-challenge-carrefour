from typing import Any, List
import uvicorn
from fastapi import FastAPI
from src.services import get_collection_data_from_mongo, save_data, check_data
from src.responses import TrendItem
from src.connection import client
from src.constants import BRAZIL_WOEID
from starlette.middleware.cors import CORSMiddleware

db = client.data_challenge
trends_collection = db.trends

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000",
    ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get('/trends', response_model=List[TrendItem])
def get_trends_route():
    return get_collection_data_from_mongo(trends_collection)


if __name__ == '__main__':
    data = check_data(trends_collection)
    if not data:
        save_data(trends_collection, 'trends', BRAZIL_WOEID)

    uvicorn.run(app, host='127.0.0.1', port=8000)
