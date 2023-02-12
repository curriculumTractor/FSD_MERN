import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
    <Navbar/>
      <div className="container-fluid">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              {/* Carousel starts */}
              <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
               </div>
               <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={require('./HomeImages/Banner2.png')} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>FullStack Development</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={require('./HomeImages/Banner3.png')} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>DataScience & Analytics</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={require('./HomeImages/Banner1.png')} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Cyber Security Analyst</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
         {/* Carousel ends */}
            </div>
          </div>

        <div className="row g-3 sectionbody">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <h4>Courses</h4>
                {/* card 1 */}
              <div className="card">
                <img src={require('./HomeImages/19197641.jpg')} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Course Name</h5>
                  <p className="card-text">Some quick example text to build on the card.</p>
                  <a href="/" class="btn">Get Details</a>
                </div>
              </div>
                {/* card 2 */}
              <div className="card">
                <img src={require('./HomeImages/20945347.jpg')} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Course Name</h5>
                  <p className="card-text">Some quick example text to build on the card.</p>
                  <a href="/" class="btn">Get Details</a>
                </div>
              </div>
                {/* card 3 */}
              <div className="card">
                <img src={require('./HomeImages/20945659.jpg')} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Course Name</h5>
                  <p className="card-text">Some quick example text to build on the card.</p>
                  <a href="/" class="btn">Get Details</a>
                </div>
              </div>
                {/* card 4 */}
              <div className="card">
                <img src={require('./HomeImages/20945659.jpg')} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Course Name</h5>
                  <p className="card-text">Some quick example text to build on the card.</p>
                  <a href="/" class="btn">Get Details</a>
                </div>
              </div>
            </div>
          </div>

        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <section className='footer text-center'>
              <img src={require('./HomeImages/cropped-ict-ico.png')} alt="" />
                <p>GF-1 Thejaswini Building, Technopark Rd, Thiruvananthapuram, Kerala 695581<br/>
                  ICT Academy of Kerala is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.<br/>
                  Copyright © 2023 ICT Academy of Kerala.  All rights reserved.</p>
              </section>
            </div>
          </div>
        </div>
  </div>
  )
}

export default Home