import React from 'react'
import Navbardash from '../Userdashboard/Navbardash'

const Profile = () => {
  return (
    <div>
      <Navbardash />
      <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
              <section className='userleft' style={{background:" #CDC4F9",height:"100%"}} >
                <div className="col-lg-4" >
                  <div className="card mb-4" style={{background:" #CDC4F9"}}>
                    <div className="card-body text-center">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                        className="rounded-circle img-fluid" style={{width:"150px"}}/>
                      <h5 className="my-3">User</h5>
                      <p className="text-muted mb-1">Full Stack Developer</p>
                      <p className="text-muted mb-4">ICT Academy Of Kerala</p>
                      <div className="d-flex justify-content-center mb-2">
                        <button type="button" className="btn btn-primary" style={{background:"#1E90FF"}}>Edit Profile</button>
                      </div>
                    </div>
                  </div>
                </div> 
              </section>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
              <section className='userright1' > 
                <div>
                  <div class="mb-3 row" style={{marginTop:"50px"}}>
                    <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="user"/>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
                    <div class="col-sm-10">
                      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="username"/>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value=".........."/>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Designation</label>
                    <div class="col-sm-6">
                      <input type="password" class="form-control" id="inputDesig" placeholder='Enter your Designantion'/>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Stream</label>
                    <div class="col-sm-6">
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Select Your Stream</option>
                        <option value="1">FSD</option>
                        <option value="2">ML-AI</option>
                        <option value="3">DSA</option>
                        <option value="3">RPA</option>
                        <option value="3">ST</option>
                        <option value="3">CSA</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex justify-content-left mb-2 ">
                    <button type="button" className="btn" style={{background:"#1E90FF",marginTop:"50px"}}>Update Profile</button>
                  </div>
                </div>           
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile