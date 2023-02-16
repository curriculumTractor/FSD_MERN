import React from 'react'
import Admin_navbar from '../Admindashboard/Admin_navbar'
const Aprofile = () => {
  return (
    <div>
      <Admin_navbar/>
    
    
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
                    <h5 className="my-3"></h5>
                    <p className="text-muted mb-1">ADMIN</p>
                    <p className="text-muted mb-4">ICT Academy Of Kerala</p>
                    
                  </div>
                </div>
              </div> 
                  
              </section>
          </div>
{/* left part ends*/}

      <div className="col col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
          <section className='userright1' > 
          <div>
          <div class="mb-3 row" style={{marginTop:"50px"}}>
    <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="Admin"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="admin@example.com"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="admin123"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value=".........."/>
    </div>
  </div>
  
  
  <div className="d-flex justify-content-left mb-2 ">
    <button type="button" className="btn" style={{background:"#39d1a6",marginTop:"50px"}}>Edit Profile</button>
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

export default Aprofile