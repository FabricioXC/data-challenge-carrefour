from pymongo import MongoClient
from src.secrets import MONGO_USERNAME, MONGO_PASSWORD
from src.config import MONGO_PORT, MONGO_HOST

client = MongoClient(F'mongodb{MONGO_USERNAME}:{MONGO_PASSWORD}//{MONGO_HOST}:{MONGO_PORT}/')
