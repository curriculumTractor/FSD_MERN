import React from 'react'
import {useState,useEffect} from 'react';
//import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './curriculumdisplay.css'
// import Navbardash from '../Userdashboard/Navbardash';
import Admin_navbar from '../Admindashboard/Admin_navbar';
import { useNavigate } from 'react-router-dom'

const CurriculumDisplay = () => {
   var [curriculum,setCurriculum]=useState([])
   var [id,setId] = useState(0);
   const navigate =useNavigate();
  
   useEffect(
    () => {
        displayCurriculum();
    },[]
  );

  const displayCurriculum=()=>{
    const userData={
    
      
      "file":'',
      "comments":'',
      "id":''
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


  const UpdateCurriculum=()=>{
    axios.post('http://localhost:3005/curupdate')
    .then((response)=>{
      console.log(response.data);
      setCurriculum(response.data);
      alert("Successfully Approved")
     }) 
     .catch(
      (error)=>{
          console.log("The error loading data"+error)
      })
  }

  const DeleteCurriculum=()=>{
    
    axios.delete(`http://localhost:3005/curricul/delete/${id}`)
    .then((response)=>{
      console.log(response.data);
      setCurriculum(response.data);
      alert("Successfully Rejected");
      navigate('/curriculumdisplay')
     }) 
     .catch(
      (error)=>{
          console.log("The error loading data"+error)
      })
  }
  return (
    <div>
      
      <Admin_navbar/>
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
                        <th scope="col">Curriculum</th>
                        
                       
                        
                        
                      </tr>
                    </thead>
                    <tbody class="curriculumbody">
                      {curriculum.map((value,index)=>{
                        return <tr>
                            <td>{value.comments}</td>
                            <td>{value.pdfpath}</td>
                            <td><button>DOWNLOAD</button></td>
                            <td><button onClick={UpdateCurriculum}>APPROVE</button></td>
                            <td><button onClick={DeleteCurriculum}>REJECT</button></td>
                           
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