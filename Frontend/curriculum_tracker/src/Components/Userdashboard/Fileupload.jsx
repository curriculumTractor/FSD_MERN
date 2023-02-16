import React, { useState } from 'react'
import Navbardash from './Navbardash'
import axios from "axios";

const Fileupload = () => {
    const [fileData, setFileData] = useState("");
    const getFile = (e) => {
       setFileData(e.target.files[0]);
     };
     const uploadFile = (e) => { 
        e.preventDefault();   
        const data = new FormData();
        data.append("file", fileData);
        axios({
          method: "POST",
          url: "http://localhost:3005/fileupload",
          data: data,
        }).then((res) => {       
            alert(res.data.message);
        });
      };
  return (
    <div className='container-fluid'>
        <Navbardash/>
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <section className='uploadbox'> 
            <h4>Upload Your Curriculum </h4>   
            <label for="floatingTextarea2">Message</label>
            <textarea class="form-control" placeholder="Leave a message here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
            <br/>
            <form onSubmit={uploadFile}>
            <p><input type="file" name="file" onChange={getFile} required /></p>
            <p><input className='btnupload' type='submit' name="upload" value="Upload"/></p>
            </form>
            </section>
            </div>
        </div>
    </div>
  )
}

export default Fileupload