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
              <section className='userleft'>
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
              <section className='userright'>
                <h5>Welcome to Your Portal</h5>

                {/* Cuuriculum display */}
                <div className="card mb-3 usercard">
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img src={require('../Home/HomeImages/19197641.jpg')} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Full Stack Development (MERN Stack) </h5>
                        <p className="card-text">MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js.</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-3 usercard">
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img src={require('../Home/HomeImages/19197641.jpg')} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Machine Learning and AI</h5>
                        <p className="card-text">The Machine Learning and AI Program will equip you with knowledge of the principles, tools, techniques and provides rigorous coverage of machine learning, natural language processing, reinforcement learning, and other modern AI techniques. </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-3 usercard">
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img src={require('../Home/HomeImages/19197641.jpg')} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Data Structures and Algorithms</h5>
                        <p className="card-text">Curated by experts having years of industry expertise, you will master all of the major topics of data structures and algorithms like as sorting, strings, heaps, DP, searching, trees, and more, as well as practice these data structure concepts on real-world projects.</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-3 usercard">
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img src={require('../Home/HomeImages/19197641.jpg')} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Robotic Process and Automation</h5>
                        <p className="card-text">Robotic process automation (RPA) is a software technology that makes it easy to build, deploy, and manage software robots that emulate humans actions interacting with digital systems and software.</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-3 usercard">
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img src={require('../Home/HomeImages/19197641.jpg')} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Computer Software Assisstant</h5>
                        <p className="card-text">Computer Software Assistant is where the trainees learning advance web designing courses such as PHP and Java and very much employable in software industry and also as Instructors of Government and Private ITIs.</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cuuriculum display */}
              </section>
            </div>
          </div>
          {/* footer */}
          <div className="row g-0">
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