const Express = require("express");
const Body_parser = require("body-parser");
const Mongoose = require("mongoose");
const Cors =  require("cors");
const path=require('path');
const PORT = 3005;
const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Multer = require('multer');
const UserModel = require("./models/Users");
const ReqModel = require('./models/requirement')
const CurModel = require("./models/curriculum");

const app =new Express();
app.use("/uploads",Express.static("./uploads"));

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
            await newUser.save( (error,data)=>{
                if (error) {
                    res.json({"status": "Failed", "Error": error});
                } else {
                    res.json({"status": "success", "Data": data});
                }
            });
            
            
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
       var email =req.body.email;
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


   

   
      
   
     // chatrrom
   
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
   
   
   

   



// Requirement BY ADMIN
//FILE UPLOAD
const fileStorageEngine = Multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './uploads')	//foldername
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname + Date.now().toString()+'.pdf')
    }
})


//middleware
const upload = Multer({storage: fileStorageEngine});

app.post('/addrequirement',upload.single("photo"), async (req, res) => {

    try {
        let data1 = {
            reqname: req.body.reqname,
            area: req.body.area,
            institution: req.body.institution,
            catagory: req.body.catagory,
            hours: req.body.hours,
            imgpath:req.file.filename

        }
        console.log(data1);
        let requirements = await ReqModel.findOne({ reqname: req.body.reqname })
        if (!requirements) {
            const newReq = new ReqModel(data1);
            const saveReq = await newReq.save();
            res.json(saveReq);
            console.log(saveReq)
        }
        else {
            res.json({ message: "Requirement already added" });
        }
    } catch (error) {
        console.log(error)

    }
})


// faculty listrequirement
app.get('/reqlist', async (req, res) => {
    try {
        let list = await ReqModel.find({ "status": "notrespond" }).sort({"_id":-1})

        res.send(list)

    } catch (error) {
        console.log(error)
    }
})


// curriculum upload by faculty
const storage = Multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"./public/uploads")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
 })

 const Mul = Multer({storage: storage});

 


 app.post('/curriculumupload',Mul.single('pdf'),(req,res)=>{
    let comments = req.body.comments
    let cur = 'uploads/' + req.file.originalname;
    let temp = new CurModel({
        pdfpath: cur,
        comments: comments
    })
    temp.save((err,data)=>{
        if (err) {
            console.log(err);
        } else {
            res.json({"status":"success", "data":data})
        }
    })
})
   
// Download curriculum by admin
app.get('/download/:id',(req,res)=>{
    CurModel.find({_id:req.params.id},(err,data)=>{
         if(err){
             console.log(err)
         }
         else{
             let x = __dirname+'/public/'+data[0].pdfpath;
             res.download(x)
         }
    })
})

//DISPLAY curriculum




app.post('/displaycurriculum',(req, res) => {

    
    
    CurModel.find(
        (err,data)=>{
            
            if (err) {
                res.json({"status":"Error","Error":err})
            } else {
               res.json(data)  
            }
        }
    )

})

// ADMIN VIEW
// ADMIN UPDATE

// ADMIN DELETE


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/Frontend/public/index.html'));
});
// listen
app.listen(PORT,()=>{
    console.log(`Server started listening to port ${PORT}`);
})



