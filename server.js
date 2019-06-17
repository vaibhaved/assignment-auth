const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const path = require('path')

const app = express();

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    next();
});

app.use(
    bodyParser.urlencoded({
        extended : false,
    })
);
app.use(bodyParser.json());

//Configuring Database
const database = require("./config/keys").mongoURI;
mongoose.connect(database, { 
    useNewUrlParser : true
}).then(()=>console.log("Connection Established with Database."))
.catch(error=>console.log(error));

app.use(passport.initialize());
require("./config/passport") (passport);
app.use("/api/users", users);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

//Configuring Port
const port = process.env.PORT || 4000;
app.listen(port, ()=>console.log("Server running on port " + port));
