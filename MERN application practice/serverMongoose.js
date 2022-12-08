const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")


app.use(bodyParser.json()); //act as a middleware between backend and front end



const mongoUrl = "mongodb+srv://admin:somepassword@cluster0.xslqt8v.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//////**************   CAR SCHEMA **************///
const carschema = mongoose.Schema({
    name: String,
    model: Number,
    availibilty: Boolean,
    yearLaunched: Number
})
const Car = mongoose.model('Car', carschema)

//////**************   CAR SCHEMA **************///
app.post('/api/addcar', (req, res) => {
    const addCar = new Car()
    addCar.save({
        name: req.body.name,
        model: req.body.model,
        availibilty: req.body.availibilty,
        yearLaunched: req.body.yearLaunched
    })
    console.log(req.body)
    addCar.save((err, doc) => {
        if (err) return console.log(err)
        res.status(200).json(doc)
    })
})
app.get("/api/getcars", (req, res) => {
    Car.find((err, doc) => {
        if (err) return console.log(err)
        res.json(doc)
    })
})


const port = process.env.port || 5000;
app.listen(port)
