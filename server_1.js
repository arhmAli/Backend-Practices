//Server made using express library
const express = require('express');
const app = express()


//middle ware for the css type file
app.use('css',express.static(__dirname+'public/css'))
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
    Model:"City",
    company:"Honda",
    Model:"Accord",
    company:"Honda",
    Model:"BR-V"
})
})
//If we have dynamic routes this is how can we access them
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
//if we have query string carname in our url this is how we can access them
app.get("/api/car", (req, res) => {
  //  http://localhost:3000/api/car?carname=honda-civic&model=2007 this is url which we worked on for this example
    let carname = req.query.carname;
    let model = req.query.model;
    res.send({
        carname,
        model
    }
    )
})

const port = process.env.port || 3000
app.listen(port)
