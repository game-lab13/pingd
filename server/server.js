const express = require('express');
const app = express();
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');

const matchRouter = require('./routes/match.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/match', matchRouter);

app.get('/', function (req, res) {
    res.send('RANKINGS');
});

app.get('/login', function (req, res) {
    // We need to send the login page to be rendered on the user's computer
});

app.post('/login', authController.verifyUser, userController.fetchRanking, (err, res) => {

    //send rankings after verify user
    //We need to grab the login info provided by the user on submit, send to auth verify user
    //upon verification, redirect to the home rankings page
})

//login should just be verifying the user, then a get request to db to grab all ranking info/ pending confirmations, invites
//signup, we need to create the user (POST REQUEST), then we need to make a GET request for the rankings

app.get('/signup', function (req, res) {
    // res.send('SIGNUP');
    //Sending user the signup page to create an account
});

app.post('/signup', authController.createUser, userController.fetchRanking, (err, res) => {
    //Grab login info provided by the user, send to create user auth where it checks if user already exists and stores hashed pw
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000!!!!!');
});