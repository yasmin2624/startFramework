import React from 'react'

export default function About() {
  return (
    <div className="about text-white">
      <div className='container d-flex justify-content-center  align-items-center flex-column vh-100'>
      <h2 className='text-center pb-2 title text-white'>ABOUT COMPONENT</h2>
      <div className="d-flex align-items-center justify-content-center mb-3"> 
  <div
    className="line me-3"
    style={{
      backgroundColor: 'rgb(255, 255, 255)',
      height: '4px',
      width: '80px'}}
  ></div>
  <i
    style={{
      fontSize: '27px',
      color: 'rgb(237, 238, 239)',
      margin: '0 10px'
    }}
  >
    ★
  </i>
  <div
    className="line ms-3"
    style={{
      backgroundColor: 'rgb(255, 255, 255)',
      height: '4px',
      width: '80px'
    }}
  ></div>
</div>

      <div className="row">
        <div className="col-md-6">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </div>
    </div>
  )
}
