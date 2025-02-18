const express = require('express');
const { resolve } = require('path');
const mongoose = require("mongoose");
require("dotenv").config();
const connectToDb = require('./Jaat');

const app = express();
const port = process.env.PORT || 9000;
const DB_url = process.env.DB_URL;
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

async function startServer() {
  try {
    await connectToDb(DB_url); // Connect to MongoDB before starting the server
    console.log("Database connected!");

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.log("Error connecting to the database:", err);
  }
}

startServer();