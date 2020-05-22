const router = require('express').Router();
const bcryptjs = require("bcryptjs")
const secrets = require("./secrets")
const Auth = require("./auth-model.js")
const jwt = require("jsonwebtoken")

router.get("/",(req,res)=> {
  Auth.find().then(users => {
    res.status(200).json(users)})
})

router.post('/register', (req, res) => {
  // implement registration

});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
