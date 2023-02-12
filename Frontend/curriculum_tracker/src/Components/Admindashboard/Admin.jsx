import React from 'react'
import Admin_navbar from './Admin_navbar'


const Admin = () => {
  return (
    <div>
      <Admin_navbar />
     
        
      <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
              <section className='userleft'style={{height:"100vh"}}>
                {/* accordian  */}
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button" type="button">
                        Dashboard
                      </button>
                    </h2>

                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        My Profile
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Requirements
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Messages
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Curriculums
                      </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                  </div>
                </div>
                {/* accordian */}
              </section>
            </div>

          <div className="col col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
        <section className='userright1'> 
        <h5>Welcome to Admin Dashboard</h5>
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
     <section className='userright2'>
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
          {/* footer */}
          <div className="row g-0" style={{paddingTop:"20%"}}>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 footeruser">
              <p>Copyright © 2023 ICT Academy Curriculum Tracker. All Rights Reserved</p>
            </div>
          </div>
          {/* footer */}
        </div>
      </div>
    </div>    
  )
}

export default Admin