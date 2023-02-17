import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbardash from '../Userdashboard/Navbardash'

const ViewCurriculm = () => {

        const [viewCurriculum,setViewCurriculm] = useState([]);
        useEffect(
            ()=>{
                getData();
            },[]
        )

        const getData=()=>{
            axios.get("http://localhost:3005/pastlist")
            .then(
                (response)=>{
                    
                    setViewCurriculm(response.data)
                    
                }
    
            ).catch(
                (error)=>{
                    console.log("error in loading data"+error);
    
                }
            )

        }

  return (
    <div>
        <Navbardash/>
           
                   <div className="container">
                   
                        <div className="row">
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <table className="table">
             <thead>
               <tr>
               <th scope="col">Sl No</th>
                 <th scope="col">Past Curricculum</th>
                 <th scope="col">Download</th>
                 
               </tr>
             </thead>
             <tbody>
              {viewCurriculum.map(
               (value,index)=>{
                  return <tr>
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
  )
}

export default ViewCurriculm