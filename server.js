const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");

const app = express();
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

//Configuring Port
const port = process.env.PORT || 4000;
app.listen(port, ()=>console.log("Server running on port " + port));
