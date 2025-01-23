import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <footer className='nav-color text-white text-center ' >

<div className="container">
<div className="row py-3 mb-3 g-4">
  <div className="col-md-4 mb-5">
    <h2>LOCATION</h2>
    <p>2215 John Daniel Drive</p>
    <span>Clark, MO 65243</span>
  </div>
  <div className="col-md-4 mb-5">
    <h2>AROUND THE WEB</h2>
    <div className="d-flex justify-content-center align-items-center mt-3 ">

      <div className="icon-wrapper">
        <i className="bi bi-facebook"></i>
      </div>

      <div className="icon-wrapper mx-3">
        <i className="bi bi-twitter"></i>
      </div>

      <div className="icon-wrapper">
        <i className="bi bi-linkedin"></i>
      </div>

      <div className="icon-wrapper ms-3">
        <i className="bi bi-globe"></i>
      </div>
    </div>

  </div>
  <div className="col-md-4 mb-5">
    <h2>ABOUT FREELANCER</h2>
    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
  </div>
</div>

</div>
<p className='footer-color p-3 m-0'>Copyright © Your Website 2021</p>
    </footer>
  )
}
