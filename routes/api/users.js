const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const newUserValidation = require("../../validation/newUserValidation");
const existingUserValidation = require("../../validation/existingUserValidation");

const User = require("../../models/User");

router.post("/register", (req,res) => {
    const {errors,isValid} = newUserValidation(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({email:req.body.email}).then(user => {
        if(user) {
            return res.status(400).json({email: "Email already exists"});
        }
        else {
            const newUser = new User({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                password : req.body.password,
            })

            bcrypt.genSalt(12, (err,salt)=> {
                bcrypt.hash(newUser.password, salt, (err,hash) => {
                    if(err) throw err;
                    newUser.password=hash;
                    newUser.save().then(user=>res.json(user)).catch(err=>console.log(err));
                })
            })
        }
    })
})

router.post("/login", (req,res) => {
    const {errors,isValid} = existingUserValidation(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({email:req.body.email}).then(user => {
        if(!user) {
            return res.status(400).json({emailnotfound: "Email Not Found"});
        }
        bcrypt.compare(req.body.password,user.password).then(isMatch => {
            if(isMatch) {
                const payload = {
                    id : user.id,
                    firstName : user.firstName,
                    lastName : user.lastName,
                    email : user.email,
                }
                jwt.sign(
                    payload,keys.secretOrKey,{
                        expiresIn : 21311315131,
                    },
                    (err,token) => {
                        res.json({
                            success : true,
                            token : 'Bearer' + token
                        })
                    }
                )
            }
            else {
                return res.status(400).json({passwordincorrect: "Password is Incorrect"});
            }
        })
    })
})

module.exports = router;