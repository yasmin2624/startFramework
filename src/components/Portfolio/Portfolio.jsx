import React, { useState } from 'react';
import poert1 from '../../assets/poert1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container text-center">
      <h2 className="mt-5 title text-uppercase">portfolio component</h2>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="line me-3" style={{ backgroundColor: 'rgb(44,62,80)', height: '4px', width: '80px' }}></div>
        <i style={{ fontSize: '27px', color: 'rgb(44,62,80)', margin: '0 10px' }}>★</i>
        <div className="line ms-3" style={{ backgroundColor: 'rgb(44,62,80)', height: '4px', width: '80px' }}></div>
      </div>

      <div className="row g-5 mb-5">
        {[poert1, port2, port3, poert1, port2, port3].map((img, index) => (
          <div key={index} className="col-md-4 position-relative">
            <div className="portfolio-item rounded position-relative">
              <img src={img} alt="" className="w-100 rounded" />
              <div
                className="overlay d-flex align-items-center justify-content-center"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(26, 195, 167, 0.65)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedImage(img)}
              >
                <p className="text-white ">+</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bootstrap Modal */}
      {selectedImage && (
        <div className="modal fade show d-block" tabIndex="-1" onClick={() => setSelectedImage(null)}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Portfolio Image</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedImage(null)}></button>
              </div>
              <div className="modal-body text-center">
                <img src={selectedImage} alt="Selected" className="w-100 rounded" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
