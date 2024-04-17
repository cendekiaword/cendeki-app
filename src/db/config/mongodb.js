const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.NEXT_PUBLIC_MONGO_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db('Final_Project')

export function getCollection(collectionName) {
  return db.collection(collectionName)
}