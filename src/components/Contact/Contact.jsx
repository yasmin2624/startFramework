import React from 'react'

export default function Contact() {
  return (
    <div className='container vh-100 '> 
    <h1 className='mt-5 title text-center text-uppercase'>conatct section</h1>
    <div className="d-flex align-items-center justify-content-center mb-3"> 
  <div
    className="line me-3"
    style={{
      backgroundColor: 'rgb(44,62,80)',
      height: '4px',
      width: '80px'}}
  ></div>
  <i
    style={{
      fontSize: '27px',
      color: 'rgb(44,62,80)',
      margin: '0 10px'
    }}
  >
    ★
  </i>
  <div
    className="line ms-3"
    style={{
      backgroundColor: 'rgb(44,62,80)',
      height: '4px',
      width: '80px'
    }}
  ></div>
</div>

  <form className='w-50 m-auto mt-5'>

  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">user Name</label>
    <input type="text" className="form-control" id="exampleInputName" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputAge" className="form-label">user Age</label>
    <input type="number" className="form-control" id="exampleInputAge" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail" className="form-label">user Email</label>
    <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword" className="form-label">user Password</label>
    <input type="password" className="form-control" id="exampleInputPassword" />
  </div>
  <button type="submit" className="about2">Submit</button>
</form>

    </div>
  )
}

