const express=require('express');
const app=express();
const fs=require('fs')
const bodyParser=require("body-parser")

app.get("/api/data/:id", (req, res) => {
    let id = req.params.id
    res.send(
        `
        <html>
        <body>
        <h1>The id that user entered is ${id}</h1>
        </body>
        </html>
        `
    )
})

const port=process.env.port || 5000
app.listen(port)
