import React from 'react'
import avataaars from '../../assets/avataaars.svg'

export default function Home() {
  return (
   <div className="home">
     <div className='container vh-100 d-flex align-items-center justify-content-center flex-column'>
     <img src={avataaars} alt="" className='w-25' />
     <h2 className='text-center title text-white'>start Framework</h2>
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
<p className=' text-center text-white'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
   </div>
  )
}
