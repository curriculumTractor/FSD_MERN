import React,{useState}from 'react'
import axios from 'axios';
import './reqstyles.css'
import Admin_navbar from '../Admindashboard/Admin_navbar';


const Requirement = () => {
     
    const [reqname,setReqname]=useState("");
    const [area,setArea]=useState("");
    const [institution,setInstitution]=useState("");
    const [catagory,setCatagory]=useState("");
    const [hours,setHours]=useState("");
    const [file,setFile]=useState("")

    const navigate= useNavigate();
    
    
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
        const res=await axios.post("http://localhost:3005/addrequirement",formData,config);
        console.log(res);
        if (res.statusText==="OK") {
            alert("Requirement successfully Added")
            navigate('/requirement')
        }    
    }

 

  return (
  <div>
          <Admin_navbar/>
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-lg-12 col-xl-12 col-xxl-12">
                
              <section className='requirebox'>
              <div className="row">
                <h1 class="adminreq">REQUIREMENT FORM</h1>
               
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 py-1">
                      <label className="form-label col-sm-4">Requirement Name</label>
                      <input className="form-control" type="text" name="reqname" size="" placeholder='Requirement Name' onChange={(e)=>setReqname(e.target.value)}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 py-1">           
                        <label className="form-label col-sm-4">Training Area</label><br/>
                        <select name="area"  onChange={(e)=>setArea(e.target.value)} className="form-select">
                                <option>FSD</option>
                                <option>ML-AI</option>
                                <option>DSA</option>
                                <option>RPA</option>
                                <option>ST</option>
                                <option>CSA</option>
                        </select>
                       </div>
                       <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 py-1">             
                            <label className="control-label col-sm-4">Instituition/Cooperate</label><br/>
                            <input class="reqname"type="text" size="" placeholder='Institution' name="institution"  onChange={(e)=>setInstitution(e.target.value)}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 py-1">     
                            <label className="control-label col-sm-4">Category</label><br/>
                            <select name="catagory"  onChange={(e)=>setCatagory(e.target.value)} className="form-select">
                                    <option>RETAIL</option>
                                    <option>ACADEMIC</option>
                                    <option>CORPORATE</option>
                                    <option>RPA</option>
                             </select>
                         </div>
                         <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 py-1">  
                              <label className="control-label col-sm-4">Number of Hours</label><br/>
                              <input type="text" placeholder='Hours ' size="30" name="hours"  onChange={(e)=>setHours(e.target.value)}/>
                          </div>
                          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 py-1">
                                <label className="control-label col-sm-4">File Upload</label><br/>
                                <input type="file" placeholder=' '  name="photo" onChange={setimgfile}/>
                           </div>
                           <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-3">   
                                <button type="button"  onClick={addRequirement} className="btn-add">ADD</button>
                            </div> 
                            </div>
                            </section> 
                             
                            </div>    
                    </div>
               </div>

  )
}

export default Requirement