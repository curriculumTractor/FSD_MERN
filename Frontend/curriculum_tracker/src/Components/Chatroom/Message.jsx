import React from 'react'
import Navbardash from '../Userdashboard/Navbardash'


const Message = () => {
  return (
    <div>
      <Navbardash />
    
      
      <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                <section className='userleft' style={{background:" #CDC4F9",height:"100%"}}>

                    <h5 style={{textAlign:"center",color:"white",paddingTop:"8px"}}>Messages</h5>
                    <div class="btn-group" style={{width:"100%",paddingRight:"5px",paddingLeft:"5px"}}>
                        <button type="button" class="btn btn-secondary ">Inbox</button>
                        <button type="button" class="btn btn-secondary  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Inbox</a></li>
                            <li><a class="dropdown-item" href="#">Archive</a></li>
                            <li><a class="dropdown-item" href="#">Spam</a></li>
                        </ul>
                    </div>
                </section>
            </div>
{/* left part ends*/}

        <div className="col col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
            <section className='userright1' style={{height:"100%",marginRight:"90px"}}> 

            
  
                  
            <div className="d-flex flex-row justify-content-start" style={{marginTop:"10px"}}>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1" style={{width:"45px",height:"100%"}}/>
                      <div>
                        <p className="small p-2 ms-3 mb-1 rounded-3" style={{background:"#f5f6f7"}}>Hello</p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                      </div>
                    </div>
            <div className="d-flex flex-row justify-content-end">
                <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                        Hi</p>
                    <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                </div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar 1"style={{width:"45px",height:"100%"}}/>
                </div>

                <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2" style={{bottom:"0"}}>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 3" style={{width:"45px",height:"100%"}}/>
                    <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                      placeholder="Type message"/>
                    <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip"></i></a>
                    <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile"></i></a>
                    <a className="ms-3" href="#!"><i className="fas fa-paper-plane"></i></a>
                  </div>

        
                  
              
            </section>
            
     
        </div>
      </div>
     </div>
    </div>
      
    </div>
  
  )
}

export default Message