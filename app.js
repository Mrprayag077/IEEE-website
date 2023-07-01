const http = require('http');
const hostname = '0.0.0.0';

const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
// const User = require("./users");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const ejs = require("ejs");
const app = express();
const { response } = require("express");
var jsonParser = bodyParser.json();
const MongoStore = require('connect-mongo');
const path = require('path');
const mime = require('mime');


const cors = require("cors");



app.use(express.json());


app.use(
    cors({
        origin: ["http://localhost:8000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);


mongoose.set('strictQuery', false);



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
const MONGO_URL = `mongodb+srv://prayag_SIHH:pp1234@cluster0.tuna9.mongodb.net/tutorialtutorial?retryWrites=true&w=majority`;
mongoose.connect(MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });


console.log("HIIIIIIIIIIIIIIIIIIIIIIIIII=");
console.log(MONGO_URL);



let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email_id: String,
    password: String,
    idser: String,
    heading: String,
    category: String,
    img1: String,
    body: String,
    Datee: Date

})

const User = mongoose.model('users', userSchema);


// const client = new MongoClient(url);
// try{ await client.connect(); }
// catch(e){ console.log(e); }
// finally{ await client.close(); }
// main();


app.use(bodyParser.urlencoded({ extended: true }));






app.get("/", function (req, res) {
    res.send('jjj');
});


app.get("/events", function (req, res) {
    User.find({ "idser": 'eventss' }).sort({ Datee: -1 }).exec(function (err, users) {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error retrieving events' });
        } else {
            console.log(users)
            res.json(users);
        }
    });
});



app.get('/events/:id', async (req, res) => {
    const id_user = req.params.id;
    console.log(id_user);

    try {
        const event = await User.findById(id_user);
        console.log("hiiiii");

        if (event) {
            res.json(event);
        } else {
            res.status(404).json({ error: 'Event not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error retrieving event details' });
    }
});



app.get("/post", function (req, res) {
    User.find({ "idser": 'eventss' }).sort({ Datee: -1 }).exec(function (err, users) {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error retrieving events' });
        } else {
            res.json(users);
        }
    });
});



app.get('/post/:id', async (req, res) => {
    const id_user = req.params.id;
    console.log(id_user);

    try {
        const event = await User.findById(id_user);
        console.log("hiiiii");

        if (event) {
            res.json(event);
        } else {
            res.status(404).json({ error: 'Event not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error retrieving event details' });
    }
});



app.listen(8000, () => console.log('listening on port: 8000'));


