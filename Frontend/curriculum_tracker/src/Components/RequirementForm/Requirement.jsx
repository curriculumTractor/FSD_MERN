import React,{useState}from 'react'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import './styles.css'

const Requirement = () => {
     
    
     const [reqname,setReqname]=useState("");
     const [area,setArea]=useState("");
     const [institution,setInstitution]=useState("");
     const [catagory,setCatagory]=useState("");
     const [hours,setHours]=useState("");
     const [file,setFile]=useState("")
    
    
    const setData=(e)=>{
        e.preventDefault();
        const {value}=e.target;
        
        setReqname(value)
        setArea(value)
         setInstitution(value)
         setCatagory(value)
         setHours(value)
        
    }
       
    
    
    
    const setimgfile=(e)=>{
          console.log(e.target.files[0]);
          setFile(e.target.files[0]);
    }

    //addrequirement details

    const addRequirement=async(e)=>{
        e.preventDefault();
        var formData=new FormData()
        formData.append("photo",file) ;
        formData.append("reqname",reqname);
        formData.append("area",area);
        formData.append("institution",institution);
        formData.append("catagory",catagory);
        formData.append("hours",hours);

        const config={
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
        const res=await axios.post("http://localhost:3002/addrequirement",formData,config);
        console.log(res);

    }

    

    
                  
    

  return (
    <div>
          <div className="container">
                <div className="row req-add bg-3">
                    <h1 >REQUIREMENT FORM</h1>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="col col-sm-8 req">
                            <form method="" className="form-horizontal" class="form-horizontal" >
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Requirement Name</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="reqname" size="30" placeholder='' onChange={setData}/>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Training Area</label>
                                    <div className="col-sm-8">
                                        {/* <input type="text" name="area" placeholder=''/> */}
                                        <select name="area"  onChange={setData}>
                                            <option>FSD</option>
                                             <option>ML-AI</option>
                                             <option>DSA</option>
                                             <option>RPA</option>
                                             <option>ST</option>
                                             <option>CSA</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Instituition/Cooperate</label>
                                    <div className="col-sm-8">
                                        <input type="text" size="30" placeholder='' name="institution"  onChange={setData}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Catagory</label>
                                    <div className="col-sm-8">
                                        {/* <input type="text" name="catagory" placeholder=''/> */}
                                        <select name="catagory"  onChange={setData}>
                                            <option>RETAIL</option>
                                             <option>ACADEMIC</option>
                                             <option>CORPORATE</option>
                                             <option>RPA</option>
                                            
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Number of Hours</label>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder=' ' size="30" name="hours"  onChange={setData}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Number of Hours</label>
                                    <div className="col-sm-8">
                                        <input type="file" placeholder=' '  name="photo" onChange={setimgfile}/>
                                    </div>
                                </div>
                               
                                <div className="form-group addbutton">
                                    <label className="control-label col-sm-4">           </label>
                                    <div className="col-sm-offset-4 col-sm-8 ">
                                        
                                    <button type="button"  onClick={addRequirement}>ADD</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Requirement