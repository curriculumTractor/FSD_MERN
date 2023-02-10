const Express = require("express");
const Body_parser = require("body-parser");
const Mongoose = require("mongoose");
const Cors =  require("cors");
const path=require('path');
const PORT = 3005;
const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserModel = require("./models/Users");
const app =new Express();


app.use(Express.static(path.join(__dirname+'/Frontend')));
app.use(Body_parser.json());
app.use(Body_parser.urlencoded({extended:true}));
app.use(Cors());


Mongoose.connect("mongodb+srv://ictakcurriculum:anprs@ictak-curriculum-tracke.k6qgvbb.mongodb.net/UserDB?retryWrites=true&w=majority",{useNewUrlParser: true});


//signup 

app.post('/signup',async(req,res)=>{
    
    try {
        let data = {
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            username : req.body. username,
            password : Bcrypt.hashSync(req.body.password,10),
            confirmPassword  : Bcrypt.hashSync(req.body.confirmPassword,10)
          
            
        }
        // console.log(data);
        let User = await UserModel.findOne({email : req.body.email})
        if(!User){
            const newUser = new UserModel(data);
            const saveUser = await newUser.save();
            res.json(saveUser);
            
        }
        else{ 
            res.json({message :"Email already registered"});
        }
    } catch (error) {
        console.log(error)
                 
    }
})
//lOGIN
app.post("/login",(req,res)=>{
    try{  
       var  email =req.body.email;
       var password=req.body.password;
        
       if(email=="admin@gmail.com",password=="admin"){
        res.json({message :"admin login"})
       }
        else{
            UserModel.find({ email : email },(err,data)=>{
            if(data.length>0){
               
               const PasswordValidator=Bcrypt.compareSync(password,data[0].password)
               if(PasswordValidator){
                    jwt.sign({email :email ,id:data[0]._id},"ictakproject",{expiresIn:"1d"},
                    (err,token)=>{
                       if (err) {
                           res.json({"status":"error","error":err}) 
                       } 
                       else {
                           res.json({"status":"success","data":data,"token":token})
                           
                       }
                    })
                   
               }
               else{
                   res.json({"Status":"Failed to Login","data":"Invalid Password"})
               }
           }
           else{
               res.json({"Status":"Failed to Login","data":"Invalid Email id"})
           }
       })
   }}catch(error){
       console.log(error)
   }
    
   })


   //chatrrom

require("dotenv").config();
const server = require("http").createServer();

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (client) => {
  client.on("send_message", (data) => {
    // Broadcast to all users
    io.sockets.emit("receive_message", data);
  });
});

server.listen(process.env.PORT || 3005);



app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/Frontend/index.html'));
});
// listen
app.listen(PORT,()=>{
    console.log(`Server started listening to port ${PORT}`);
})