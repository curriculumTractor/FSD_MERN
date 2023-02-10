import React from 'react'

const Navbardash = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbg">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#"><img src={require('../imagelogo/logo_ct.png')}  alt="..." /></a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0" style={{paddingRight:"5%"}}>
            <li class="nav-item" >
                <a class="nav-link" href="#"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/user">Home</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/message"> <i class="fa-regular fa-message"></i></a>
              </li>

              {/* notification */}
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-regular fa-bell"></i><span class="btn__badge pulse-button ">1</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
                  <li className='notifydrop'><a class="dropdown-item" href="/message">New Notification</a></li>
                  <li class="dropdown-divider"></li>
                  <li className='notifydrop'><a class="dropdown-item" href="/message">All Notification</a></li>
                </ul>
              </li>
              {/* notification */}
              
              {/* Profile */}
              <li class="nav-item dropdown">
                <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa fa-user"></i></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
                  <li><a class="dropdown-item" href="/profile">My Profile</a></li>
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><a class="dropdown-item" href="/">Logout</a></li>
                </ul>
                </li>


              {/* Profile */}

            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbardash