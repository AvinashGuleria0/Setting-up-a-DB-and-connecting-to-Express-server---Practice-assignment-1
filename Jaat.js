const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const Port = process.env.PORT || 8001
const DB_Url = process.env.DB_URL;

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected!");

        const db = mongoose.connection.db;
        const userCollection = db.collection("Dada");

        await userCollection.insertOne({ name: "Avinash", age: 69 });
        console.log("Data saved!");
    } catch (err) {
        console.error("Database connection error:", err);
    }
};

module.exports = connectToDb