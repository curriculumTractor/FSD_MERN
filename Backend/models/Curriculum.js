const Mongoose = require("mongoose"); 
const Schema = Mongoose.Schema

const CurSchema = new Schema({
    
    pdfpath:String            
});
let CurModel = Mongoose.model("curriculums",CurSchema);
module.exports = CurModel;