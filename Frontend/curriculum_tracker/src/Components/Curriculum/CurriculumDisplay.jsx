import React from 'react'
import {useState,useEffect} from 'react';
//import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './curriculumdisplay.css'
import Navbardash from '../Userdashboard/Navbardash';
const CurriculumDisplay = () => {
   var [curriculum,setCurriculum]=useState([])
   const [comments,setComments]=useState('');
   
   const [file,setFile]=useState("");

   useEffect(
    () => {
        displayCurriculum();
    },[]
  );

  const displayCurriculum=()=>{
    const userData={
    
      
      "file":'',
      "comments":''
    }
    axios.post('http://localhost:3005/displaycurriculum',userData)
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
        
          <div className="row curview">
            {/* <h1 align="center">CURRICULUMS</h1> */}
            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" >
              <div className="row g-3">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <table class="table table-success table-striped curriculumtablelist" >
                    <thead>
                      <tr className="bg-dark text-white" class="bg-gray-50 currrow">
                      <th scope="col">Comments</th>
                        <th scope="col">Reference</th>
                        
                       
                        
                        
                      </tr>
                    </thead>
                    <tbody class="curriculumbody">
                      {curriculum.map((value,index)=>{
                        return <tr>
                            <td>{value.comments}</td>
                            <td>{value.pdfpath}</td>
                            <td><button>DOWNLOAD</button></td>
                            
                            
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