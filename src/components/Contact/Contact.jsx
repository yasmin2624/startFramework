import React from "react";
import "./Contact.css"; // هنضيف بعض الستايلات في ملف منفصل

export default function Contact() {
  return (
    <div className="container vh-100">
      <h1 className="mt-5 title text-center text-uppercase">contact section</h1>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="line me-3" style={{ backgroundColor: 'rgb(44,62,80)', height: '4px', width: '80px' }}></div>
        <i style={{ fontSize: '27px', color: 'rgb(44,62,80)', margin: '0 10px' }}>★</i>
        <div className="line ms-3" style={{ backgroundColor: 'rgb(44,62,80)', height: '4px', width: '80px' }}></div>
      </div>

      <form className="w-50 m-auto mt-5">
        {[
          { id: "name", label: "User Name", type: "text" },
          { id: "age", label: "User Age", type: "number" },
          { id: "email", label: "User Email", type: "email" },
          { id: "password", label: "User Password", type: "password" },
        ].map((field) => (
          <div key={field.id} className="form-group">
            <input
              type={field.type}
              id={field.id}
              className="form-control"
              placeholder=" "
              required
            />
            <label htmlFor={field.id}>{field.label}</label>
          </div>
        ))}

        <button type="submit" className="about2">
          Submit
        </button>
      </form>
    </div>
  );
}
