const express = require("express");
const app = express();
const { MongoClient } = require('mongodb');
const mongoUrl = "mongodb+srv://admin:randompassword@cluster0.xslqt8v.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(mongoUrl);
app.get('/api/users', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('myApp');
        const collection = database.collection("users");
        const query = await collection.insertOne({
            name: "arham",
            lastname: "khan"
        });
        res.status(200).json({ responding: "passed" })
    }
    catch (err) {
        throw err
    }
    finally {
        await client.close();
        console.log("The whole process has been finished")

    }
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
