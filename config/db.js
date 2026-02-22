const { MongoClient } = require("mongodb");
const uri = require("../atlas_uri");

let client;
let db;

const connectDB = async () => {
  try {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db("test");
    console.log("Connected to MongoDB Atlas");
    return db;
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

const getDB = () => db;

module.exports = { connectDB, getDB };