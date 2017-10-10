from pymongo import MongoClient

client = MongoClient()
db = client.test
db.test.count()
result = db.test.insert_many([{'x': i} for i in range(160)])
result.inserted_ids
