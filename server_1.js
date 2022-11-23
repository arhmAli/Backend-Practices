//Server made using express library
const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send("<html><body><h1>Hello there</h1></body></html>")
})
app.get("/api/data/name", (req, res) => {
    res.send({
        name: "hello",
        age: "20"
    });
})
app.get('/api/data/cars',(req,res)=>{
res.send({
    company:"Honda",
    Model:"Civic",
    company:"Honda",
    Model:"City"
})
})
const port = process.env.port || 3000
app.listen(port)
