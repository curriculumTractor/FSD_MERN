import React from 'react'
import Admin_navbar from './Admin_navbar'
import './adminstyle.css'


const Admin = () => {
  return (
  <div>
      <Admin_navbar/>
      <div className='container-fluid ps-0'>
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                <div className="sidebar">
                  <a className="active" href="/admin" style={{ backgroundColor:" #f0f0f0",color:"#1E90FF",fontWeight:"bold"}}> DASHBOARD</a>
                  <a href="/aprofile"><i class="fa-solid fa-user"></i>&nbsp;&nbsp; My Profile</a>
                  <a href="/requirement"><i class="fa-solid fa-message"></i>&nbsp;&nbsp; Requirements</a>
                  <a href="/viewcurriculm"><i class="fa-solid fa-sheet-plastic"></i>&nbsp;&nbsp; Curriculum</a>
                  <span className='greenbtn'><a href='/curriculumdisplay'><button className='btn btn-success'>New Curriculum</button></a></span>
                </div>
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                <h5 className='userhead'>Welcome to ADMIN Dashboard</h5>
                <section className='userright d-flex'> 
                  <div class="coursebox">
                    <div class="hover hover-1 text-white rounded"><img src={require('../Userdashboard/Course_imgs/ds.jpg')} alt=""/>
                      <div class="hover-overlay"></div>
                      <div class="hover-1-content px-5 py-4">
                        <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Data </span>Science</h3>
                        <p class="hover-1-description font-weight-light mb-0">Certified Specialist in Data Science</p>
                      </div>
                    </div>
                  </div> 

                  <div class="coursebox">
                    <div class="hover hover-1 text-white rounded"><img src={require('../Userdashboard/Course_imgs/fsd.jpg')} alt=""/>
                      <div class="hover-overlay"></div>
                      <div class="hover-1-content px-5 py-4">
                        <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Fullstack </span>Development</h3>
                        <p class="hover-1-description font-weight-light mb-0">Certified Specialist in FSD (MERN)</p>
                      </div>
                    </div>
                  </div>
    
                  <div class="coursebox">
                    <div class="hover hover-1 text-white rounded"><img src={require('../Userdashboard/Course_imgs/ai.jpg')} alt=""/>
                      <div class="hover-overlay"></div>
                      <div class="hover-1-content px-5 py-4">
                        <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Artificial </span>Intelligence</h3>
                        <p class="hover-1-description font-weight-light mb-0">Certified Specialist in Artificial Intelligence</p>
                      </div>
                    </div>
                  </div>         
                </section>

                <section className='userright  d-flex'>
                  <div class="coursebox">
                    <div class="hover hover-1 text-white rounded"><img src={require('../Userdashboard/Course_imgs/ml.jpg')} alt=""/>
                      <div class="hover-overlay"></div>
                      <div class="hover-1-content px-5 py-4">
                        <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Machine </span>Learning</h3>
                        <p class="hover-1-description font-weight-light mb-0">Certified Specialist in Machine Learning</p>
                      </div>
                    </div>
                  </div> 
                  <div class="coursebox">
                    <div class="hover hover-1 text-white rounded"><img src={require('../Userdashboard/Course_imgs/cs.jpg')} alt=""/>
                      <div class="hover-overlay"></div>
                      <div class="hover-1-content px-5 py-4">
                        <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Cyber </span>Security</h3>
                        <p class="hover-1-description font-weight-light mb-0">Certified Specialist in Cyber Security</p>
                      </div>
                    </div>
                  </div> 
                  <div class="coursebox">
                    <div class="hover hover-1 text-white rounded"><img src={require('../Userdashboard/Course_imgs/st.jpg')} alt=""/>
                      <div class="hover-overlay"></div>
                      <div class="hover-1-content px-5 py-4">
                        <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Software </span>Testing</h3>
                        <p class="hover-1-description font-weight-light mb-0">Certified Specialist Software Testing</p>
                      </div>
                    </div>
                  </div> 
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-3" >
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 footeruser" >
          <p>Copyright © 2023 ICT Academy Curriculum Tracker. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Admin