const http = require('http');
const hostname = '0.0.0.0';

const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const User = require("./users");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const ejs = require("ejs");
const app = express();
const { response } = require("express");
var jsonParser = bodyParser.json();
const MongoStore = require('connect-mongo');
const path = require('path');
const mime = require('mime');

app.use('/dist', express.static('dist'));


app.use('/assets', express.static('assets'));
app.use('/assets/css', express.static('css'));
app.use('/assets/js', express.static('js'));
app.use('/Wave-10s-1223px.svg', express.static('Wave-10s-1223px.svg'));
app.use('/layer2.svg', express.static('layer2.svg'));
app.use('/Wave-10s-1223px.svg', express.static('Wave-10s-1223px.svg'));
app.use('/assets/img/OIPLL.jpg', express.static('OIPLL.jpg'));

// app.use(express.static('/assets'));

app.set('view engine', 'ejs');


// async function main() {
const MONGO_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tuna9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });


console.log("HIIIIIIIIIIIIIIIIIIIIIIIIII=");
console.log(MONGO_URL);


// const client = new MongoClient(url);
// try{ await client.connect(); }
// catch(e){ console.log(e); }
// finally{ await client.close(); }
// main();


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    // res.send("hello world")
    res.render("index");
});


app.get("/aboutus", function (req, res) {
    // res.send("hello world")
    res.render("aboutus");
});


app.get("/membership", function (req, res) {
    // res.send("hello world")
    res.render("membership");
});


app.get("/contactus", function (req, res) {
    // res.send("hello world")
    res.render("aboutus");
});


app.get("/eventreg", function (req, res) {
    // res.send("hello world")
    res.render("neweventreg");
});

app.get("/acheivements", function (req, res) {
    // res.send("hello world")
    res.render("acheivement");
});


app.get("/faq", function (req, res) {
    // res.send("hello world")
    res.render("faq");
});

app.get("/acheivements", function (req, res) {
    // res.send("hello world")
    res.render("acheivement");
});







app.post('/formm', function (req, res) {

    const currentDate = new Date().toISOString();


    try {
        // Create a new event instance
        const newEvent = new User({
            _id: new mongoose.Types.ObjectId(),
            heading: req.body.heading,
            body: req.body.body,
            Datee: new Date()
        });

        // Add the new event to the events array in the main schema and save
        newEvent.save();

        res.redirect('/formm');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding event');
    }
});




app.get("/events", function (req, res) {



    User.find({ "idser": 'eventss' }).sort({ Datee: -1 }).exec(function (err, users) {

        res.render("events", {

            people: [55, 49, 44, 24, 15],
            usl: users



        });


        // res.send("the sum is"+`<br/><br />email:${s11}<br />password:${c11}<br />`);

    });
});



app.get("/blogg", function (req, res) {



    User.find({ "idser": 'eventss' }).sort({ Datee: -1 }).exec(function (err, users) {

        res.render("projectpg", {

            people: [55, 49, 44, 24, 15],
            usl: users



        });


        // res.send("the sum is"+`<br/><br />email:${s11}<br />password:${c11}<br />`);

    });
});



app.get('/events/:id', async (req, res) => {
    try {
        const event = await User.findById(req.params.id);
        console.log("hiiiii");
        res.render('eventinfo', { people: 'sssss', event });
        console.log(event);
    } catch (err) {
        console.log(err);
        res.send('Error retrieving event details');
    }
});


app.get('/blogg/:id', async (req, res) => {
    try {
        const event = await User.findById(req.params.id);
        console.log("hiiiii");
        res.render('projdet', { people: 'sssss', event });
        console.log(event);
    } catch (err) {
        console.log(err);
        res.send('Error retrieving event details');
    }
});


app.listen(9000, function (req, res) {
    console.log("https://localhost:9000/");
});







app.get("/signin.sih", jsonParser, function (req, res) {
    // res.send("hello world")

    res.render("signin");
    // res.render("signin");
});

app.post('/signinj', function (req, res) {
    res.render("signin");
});


app.post('/signinjjj', function (req, res) {

    res.render("index");
});

// const collection = client.db("tutorial").collection("users");
// const users = await collection.find({});


app.post("/insertt", function (req, res) {
    res.render("/insertt");
});


app.get("/insertt", function (req, res) {
    // res.send("hello world")
    res.render("insertt");
});
