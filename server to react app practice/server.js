const express = require("express");
const app = express();
const { MongoClient } = require('mongodb');
const mongoUrl = "mongodb+srv://adminname:somepassword@cluster0.xslqt8v.mongodb.net/?retryWrites=true&w=majority"
app.get('/api/users', (req, res) => {
    res.json([
        {
            id: 1,
            username: "francis"
        },
        {
            id: 2,
            username: "steve"
        }
    ])
})
app.get('/', (req, res) => {
    res.send(
        {
            name: "hello",
            age: "20"
        })
})
MongoClient.connect(mongoUrl, (err, client) => {
    if (err) {
        throw err
    }
    else {
        console.log("connected to the mongodb")
    }
})
const port = process.env.port || 5000;
app.listen(port)
