import React, { useState } from 'react'
import Navbardash from '../Navbardash'
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom'

const Fileupload = () => {
    const [fileData, setFileData] = useState("");
    const [comments,setComments]=useState("");
    const navigate=useNavigate();
    const getFile = (e) => {
       setFileData(e.target.files[0]);
     };
     const uploadFile =async (e) => { 
        e.preventDefault();   
        const data = new FormData();
        data.append("pdf", fileData);
        data.append("comments",comments);
        
        console.log(data);
        const config={
          headers:{
              "Content-Type":"multipart/form-data"
          }
      }
        // axios({
        //   method: "POST",
        //   url: "http://localhost:3005/curriculumupload",
        //   data: data,config
        // }).then((res) => {       
        //     alert(res.data.message);
        // });
        const res=await axios.post("http://localhost:3005/curriculumupload",data,config);
        console.log(res);
        if (res.statusText==="OK") {
             alert("Requirement successfully Added");
            //  navigate('/uploadcurriculum')
              res.redirect('/uploadcurriculum')
        }     
        
      };
  return (
    <div className='container-fluid'>
        <Navbardash/>
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <section className='uploadbox'> 
            <h4>Upload Your Curriculum </h4>   
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
