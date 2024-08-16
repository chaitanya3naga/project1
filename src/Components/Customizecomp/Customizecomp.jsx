//import React from 'react'
import React, { useState } from 'react';
import './Customizecomp.css'
const Customizecomp = () => {
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          phoneNumber: '',
          photo: null,
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
      
        const handleFileChange = (e) => {
          setFormData({
            ...formData,
            photo: e.target.files[0],
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Handle form submission logic here
          console.log('Form Data:', formData);
        };
  return (
    <div className='customizecomp-container'>
        <h2>Customize as you like</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="photo">Upload Photo:</label>
        <input
          type="file"
          id="photo"
          name="photo"
          onChange={handleFileChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
export default Customizecomp;