import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="container">
      <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                {/* top nav */}
                <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                    <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link"  href="./login">LOGIN</a>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="./signup">REGISTER</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>

            </div>
        </div>

        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <Navbar/>  
            </div>
        </div>

        <div className="row">
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
                     <h5>First slide label</h5>
                     <p>Some representative placeholder content for the first slide.</p>
                 </div>
               </div>
               <div class="carousel-item">
                  <img src={require('./HomeImages/Banner3.png')} class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                  </div>
               </div>
               <div class="carousel-item">
                  <img src={require('./HomeImages/Banner1.png')} class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
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
            <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                <section className='announce'>
                <h4>Latest Announcements</h4>
                <p>Requirement on Data Science</p>
                <p>Requirement on Full Stack Development</p>
                <p>Requirement on Machine Learning</p>
                <p>Requirement on Artificial Intelligence</p>
                </section>
             </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                <section className='coursesbox'>
                <h4>Courses</h4>
                  {/* card 1 */}
                <div className="card">
                  <img src={require('./HomeImages/19197641.jpg')} class="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Course Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-info">Get Details</a>
                  </div>
                </div>

                {/* card 2 */}
                <div className="card">
                  <img src={require('./HomeImages/20945347.jpg')} class="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Course Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-info">Get Details</a>
                  </div>
                </div>

                {/* card 3 */}
                <div className="card">
                  <img src={require('./HomeImages/20945659.jpg')} class="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Course Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-info">Get Details</a>
                  </div>
                </div>

                </section>
            </div>
        </div>

        <div className="row g-5">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <section className='footer text-center'>
                  <img src={require('./HomeImages/cropped-ict-ico.png')} alt="" />
                  <p>GF-1 Thejaswini Building, Technopark Rd, Thiruvananthapuram, Kerala 695581<br/>
                  ICT Academy of Kerala is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.<br/>
                  Copyright © 2022 ICT Academy of Kerala.  All rights reserved.</p>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Home