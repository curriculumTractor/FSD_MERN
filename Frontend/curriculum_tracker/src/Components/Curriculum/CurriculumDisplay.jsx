import React from 'react'
import {useState,useEffect} from 'react';
//import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './curriculumdisplay.css'
import Navbardash from '../Userdashboard/Navbardash';
const CurriculumDisplay = () => {
   var [curriculum,setCurriculum]=useState([])
   //const [comments,setComments]=useState('');
   
   const [file,setFile]=useState("");

   useEffect(
    () => {
        displayCurriculum();
    },[]
  );

  const displayCurriculum=()=>{
    const userData={
    
      
      "file":''
      
    }
    axios.post('"http://localhost:3005/fileupload"',userData)
    .then((response)=>{
      console.log(response.data)
      setCurriculum(response.data)
  })
  .catch(
      (error)=>{
          console.log("The error loading data"+error)
      }
  )
  }

  return (
    <div>
      <Navbardash/>
      <div className='container curriculumlist'>
        
          <div className="row">
            <h1 align="center">CURRICULUMS</h1>
            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" class="w-full">
              <div className="row g-3">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <table class="table table-success table-striped curriculumtablelist" >
                    <thead>
                      <tr className="bg-dark text-white" class="bg-gray-50">
                        
                        <th scope="col">Reference</th>
                        
                        {/* <th scope="col"><button class="currlist">DOWNLOAD</button></th> */}
                        
                        
                      </tr>
                    </thead>
                    <tbody class="curriculumbody">
                      {curriculum.map((value,index)=>{
                        return <tr>
                            {/* <th scope="row">{index + 1}</th> */}
                            {/* <td>{value.reqname}</td>
                            <td>{value.area}</td> */}
                            <td>{value.imgpath}</td>
                            
                            
                          </tr>
                      }
                      )}
                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> 
    </div>
  )
}

export default CurriculumDisplay