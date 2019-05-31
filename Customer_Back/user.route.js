const express = require('express');
const userRoutes = express.Router();

let User = require('./user.model');

userRoutes.route('/add').post(function (req, res) {
    let user = new User(req.body);
    user.save()
        .then(() => {
            res.status(200).json({'msg': 'User has been created successfully'});
        })
        .catch(() => {
            res.status(400).send("unable to save to database");
        });
});

userRoutes.route('/').get(function (req, res) {
    User.find(function(err, users){
        if(err){
            res.json(err);
        }
        else {
            res.json(users);
        }
    });
});

userRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    User.findById(id, function (err, user){
        if(err) {
            res.json(err);
        }
        res.json(user);
    });
});

userRoutes.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else {
            user.name = req.body.name;
            user.email = req.body.email;
            user.save().then(() => {
                res.json('Update complete');
            })
                .catch(() => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

userRoutes.route('/delete/:id').delete(function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoutes;