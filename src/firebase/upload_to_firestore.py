import json
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

# Load your JSON file
with open("products_fixed.json", "r", encoding="utf-8") as file:
    products = json.load(file)

# Upload to Firestore
for product in products:
    db.collection("products").add(product)

print("All products uploaded successfully!")
