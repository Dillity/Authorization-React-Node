const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/userDB');
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = new mongoose.model('User', userSchema);

app.post('/register', function(req, res) {
    User.findOne({email: req.body.email}, function(err, foundUser) {
        if(foundUser) {
            res.send({message: 'Such user already exists, please login'});
        } else {
            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                const newUser = new User({
                    email: req.body.email,
                    password: hash
                });
                newUser.save(function(err) {
                    if(err) {
                        console.log(err);
                    } else {
                        res.send({message: 'You have registered successfully, please log in!'});
                    }
                });
            });
        }
    });
});


app.post('/login', function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}, function(err, foundUser) {
        if(err) {
            res.send({message: err});
        } else {
            if(foundUser) {
                bcrypt.compare(password, foundUser.password, function(err, result) {
                    if(result === true) {
                        res.send({foundUser: foundUser, loginStatus: true});
                    } else {
                        res.send({message: 'Wrong email or password, please try again'});
                    }
                });
            } else {
                res.send({message:'No such user exists'});
            }
        }
    });
});



app.listen(PORT, function() {
    console.log('Server is running');
})
