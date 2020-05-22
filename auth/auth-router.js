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
  const userDetails = req.body;

    if (isValid(userDetails)){
        const rounds = process.env.BCRYPT_ROUNDS || 4;
        userDetails.password = bcryptjs.hashSync(userDetails.password, rounds);
        console.log(userDetails)
        Auth.add(userDetails)
            .then(user=>{
                console.log("user", user)
                res.status(201).json(user)
            })
            .catch(err => {
                res.status(500).json({error: "Database error while registering"})
            })
    } else {
        res.status(400).json({message:"Please provide valid username/password/department"})
    }
});

router.post('/login', (req, res) => {
  const {username, password} = req.body;
    if(isValid(req.body)){
        Auth.findBy({username})
            .then(users => {

                if (users[0] && bcryptjs.compareSync(password,users[0].password)){


                    const token = generateToken(users[0])

            

                    res.status(200).json({message: "You made it!",token})
                } else {
                    res.status(401).json({message: "Your username/password is wrong or doesn't exist"})
                }
            })
            .catch( err => res.status(500).json({error: "Database error while logging in"+err.message}))
    } else {
        res.status(400).json({message:"Please provide valid username/password"})
    }
});

function isValid(user) {
  return Boolean(user.username && user.password && typeof user.password === "string")
}   

function generateToken(user){
  const payload = {
      userId : user.id,
      username : user.username
  }
  const secret = secrets.jwtSecret;
  const options = {
      expiresIn:"1d"
  }
  return jwt.sign(payload, secret, options)
}

module.exports = router;
