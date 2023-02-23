import React, { useState } from 'react'
import Navbardash from '../Navbardash'
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom'

const Fileupload = () => {
  const [title,setTitle]=useState("");
  const [area,setArea]=useState("");
  const [institution,setInstitution]=useState("");
  const [category,setCategory]=useState("");

    const [fileData, setFileData] = useState("");
    const [comments,setComments]=useState("");
    const navigate=useNavigate();

    const getFile = (e) => {
       setFileData(e.target.files[0]);
     };
     const uploadFile =async (e) => { 
        e.preventDefault();   
        const data = new FormData();
        data.append("title", title);
        data.append("area", area);
        data.append("institution", institution);
        data.append("category", category);
        data.append("pdf", fileData);
        data.append("comments",comments);
        
        console.log(data);
        const config={
          headers:{
              "Content-Type":"multipart/form-data"
          }
      }
      
      const res=await axios.post("http://localhost:3005/curriculumupload",data,config);
        console.log(res);
        if (res.statusText==="OK") {
             alert("Requirement successfully Added");
            res.redirect('/uploadcurriculum')
        }     
        
    }

  return (
    <div className='container-fluid'>
        <Navbardash/>
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <section className='uploadbox'> 
              <h4 style={{textAlign:"center",color:"#1E90FF"}}>Upload Your Curriculum </h4>  
              <div class="mb-3 row" style={{marginTop:"5%"}}>
                <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="inputDesig" onChange={(e)=>setTitle(e.target.value)} placeholder='Enter Title of curriculm'/>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label" onChange={(e)=>setArea(e.target.value)}>Area of Training</label>
                  <div class="col-sm-6">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Select</option>
                      <option value="1">FSD</option>
                      <option value="2">ML-AI</option>
                      <option value="3">DSA</option>
                      <option value="3">RPA</option>
                      <option value="3">ST</option>
                      <option value="3">CSA</option>
                    </select>
                  </div>
              </div> 
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label" onChange={(e)=>setCategory(e.target.value)}>Category of Requirement</label>
                  <div class="col-sm-6">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Select</option>
                      <option value="1">Retail</option>
                      <option value="2">Academic</option>
                      <option value="3">Corporate</option>
                    </select>
                  </div>
              </div> 
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Institution</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="inputDesig" onChange={(e)=>setInstitution(e.target.value)} placeholder='Enter Instituion name'/>
                </div>
              </div>
              <label for="floatingTextarea2">Message</label>
              <textarea class="form-control" onChange={(e)=>setComments(e.target.value)} placeholder="Leave a message here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
              <br/>
              <form onSubmit={uploadFile}>
                <p><input type="file" name="pdf" onChange={getFile} required /></p>
                <p><input className='btnupload' type='submit' name="upload" value="Upload"/></p>
              </form>
            </section>
          </div>
        </div>
      </div>
  )
}

export default Fileupload
