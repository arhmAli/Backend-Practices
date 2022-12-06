const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")


app.use(bodyParser.json());



const mongoUrl = "mongodb+srv://admin:1212131131@cluster0.xslqt8v.mongodb.net/?retryWrites=true&w=majority"
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
app.post('/api/addcar', () => {
    console.log(req.body)
})


const port = process.env.port || 5000;
app.listen(port)
