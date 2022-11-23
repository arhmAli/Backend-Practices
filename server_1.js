const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send("<html><body><h1>Hello there</h1></body></html>")
})
app.get("/api/data", (req, res) => {
    res.send({
        name: "hello",
        age: "20"
    });
})
const port = process.env.port || 3000
app.listen(port)
