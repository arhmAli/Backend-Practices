const express = require('express');
const app = express();
const mongoose = require("mongoose");

const mongoUrl = "mongodb+srv://arhamkhan:arhamkhan1@cluster0.xslqt8v.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useunifiedTopology: true
});


//////**************   CAR SCHEMA **************///
const carschema = mongoose.schema({
    name: String,
    model: Number,
    availibilty: Boolean,
    yearLaunched: Number
})
const Car = mongoose.model('Car', carschema)

//////**************   CAR SCHEMA **************///


const port = process.env.port || 5000;
app.listen(port)