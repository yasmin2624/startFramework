import React from 'react';
import poert1 from '../../assets/poert1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';


export default function Portfolio() {
  return (
    <div className="container text-center">
      <h2 className="mt-5 title text-uppercase">portfolio component</h2>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div
          className="line me-3"
          style={{
            backgroundColor: 'rgb(44,62,80)',
            height: '4px',
            width: '80px',
          }}
        ></div>
        <i
          style={{
            fontSize: '27px',
            color: 'rgb(44,62,80)',
            margin: '0 10px',
          }}
        >
          ★
        </i>
        <div
          className="line ms-3"
          style={{
            backgroundColor: 'rgb(44,62,80)',
            height: '4px',
            width: '80px',
          }}
        ></div>
      </div>

      <div className="row g-5 mb-5">
        <div className="col-md-4 position-relative">
          <div className="portfolio-item rounded">
          <img src={poert1} alt="" className="w-100 rounded" />
          <div className="overlay">
            <p className="text-white">+</p>
          </div>
          </div>
        </div>
        <div className="col-md-4 position-relative ">
        <div className="portfolio-item rounded"> 
        <img src={port2} alt="" className="w-100 rounded" />
          <div className="overlay">
            <p className="text-white">+</p>
          </div>
        </div>
        </div>
        <div className="col-md-4 position-relative ">
           <div className="portfolio-item rounded"> 
           <img src={port3} alt="" className="w-100 rounded" />
          <div className="overlay">
            <p className="text-white">+</p>
          </div>
           </div>
        </div>
        <div className="col-md-4 position-relative">
          <div className="portfolio-item rounded">
          <img src={poert1} alt="" className="w-100 rounded" />
          <div className="overlay">
            <p className="text-white">+</p>
          </div>
          </div>
        </div>
        <div className="col-md-4 position-relative ">
        <div className="portfolio-item rounded"> 
        <img src={port2} alt="" className="w-100 rounded" />
          <div className="overlay">
            <p className="text-white">+</p>
          </div>
        </div>
        </div>
        <div className="col-md-4 position-relative ">
           <div className="portfolio-item rounded"> 
           <img src={port3} alt="" className="w-100 rounded" />
          <div className="overlay">
            <p className="text-white">+</p>
          </div>
           </div>
        </div>
        
      </div>
    </div>
  );
}
