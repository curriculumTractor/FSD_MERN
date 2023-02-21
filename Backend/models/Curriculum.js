const Mongoose = require("mongoose"); 
const Schema = Mongoose.Schema

const CurSchema = new Schema({
    
    pdfpath: {
        type : String 
    },
    comments: {
        type: String,
       
     },
     title: {
        type : String ,
        required : true
    },
    area: {
        type : String ,
        required : true
    },
    institution: {
        type : String ,
        required : true
    },
    category: {
        type : String ,
        required : true
    },
    status: {
        type: String,
        default: "notapproved"  
     }           
});
let CurModel = Mongoose.model("curriculums",CurSchema);
module.exports = CurModel;