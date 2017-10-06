from pymongo import MongoClient
client = MongoClient('mongodb://localhost/schoolapp')

db = client.business
