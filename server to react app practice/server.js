const express = require("express");
const app = express();

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
const port = process.env.port || 5000;
app.listen(port)