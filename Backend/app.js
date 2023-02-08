const Express = require("express");
const Body_parser = require("body-parser");
const Mongoose = require("mongoose");
const Cors =  require("cors");
const path=require('path');
const PORT = 3005;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { adminAuth, userAuth } = require("./middleware/Auth");

const UserModel = require("./models/Users");
const app =new Express();


app.use(Express.static(path.join(__dirname+'/Frontend')));
app.use(Body_parser.json());
app.use(Body_parser.urlencoded({extended:true}));
app.use(Cors());
app.use("/api/auth", require("./middleware/route"))
app.use(cookieParser());

app.get("/admin", adminAuth, (req, res) => res.send("Admin Route"));
app.get("/basic", userAuth, (req, res) => res.send("User Route"));

Mongoose.connect("mongodb+srv://ictakcurriculum:anprs@ictak-curriculum-tracke.k6qgvbb.mongodb.net/UserDB?retryWrites=true&w=majority",{useNewUrlParser: true});

// Handling Error
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
  })




app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/Frontend/index.html'));
});
// listen
app.listen(PORT,()=>{
    console.log(`Server started listening to port ${PORT}`);
})