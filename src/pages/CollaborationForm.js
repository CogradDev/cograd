import React, { useState } from 'react';
import './CollaborationForm.css';

const CollaborationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    collaborationDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('Form Data before submit:', formData);
  
  //   try {
  //     const response = await fetch('https://sheetdb.io/api/v1/274gz7xfnpodz', {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         data: [
  //           {
  //             'Name': formData.name,
  //             'Email': formData.email,
  //             'Phone': formData.phone,
  //             'School': formData.schoolName,
  //             'Details': formData.collaborationDetails,
  //           },
  //         ],
  //       }),
  //     });
  
  //     const result = await response.json();
  //     console.log('Form Submission Result:', result);
  
  //     // Optionally reset the form or show a success message
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       schoolName: '',
  //       collaborationDetails: '',
  //     });
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data before submit:', formData);
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxpl6QUY5jVKScIW5cLoMmpAqPKLtiY2ocOHauj1cOc55FLWHpieiOR1qAf1izojNFh/exec', { // Replace with your Web App URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          schoolName: formData.schoolName,
          collaborationDetails: formData.collaborationDetails,
        }),
      });
  
      const result = await response.json();
      console.log('Form Submission Result:', result);
  
      // Optionally reset the form or show a success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        schoolName: '',
        collaborationDetails: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="collaboration-form">
        <h2>Collaboration Form</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <label>School Name</label>
        <input
          type="text"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          placeholder="Enter your school name"
          required
        />

        <label>Collaboration Details</label>
        <textarea
          name="collaborationDetails"
          value={formData.collaborationDetails}
          onChange={handleChange}
          placeholder="Enter collaboration details"
          rows="4"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CollaborationForm;
