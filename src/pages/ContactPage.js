import React, { useState } from 'react';
import './ContactPage.css'
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    // Add validation logic here
    const errorObj = {};
    if (!name) {
      errorObj.name = 'Please enter your name';
    }
    if (!email) {
      errorObj.email = 'Please enter your email';
    }
    if (!phone) {
      errorObj.phone = 'Please enter your phone number';
    }
    if (!message) {
      errorObj.message = 'Please enter your message';
    }

    if (Object.keys(errorObj).length > 0) {
      setErrors(errorObj);
    } else {
      // Send the form data to the server or API
      console.log('Form submitted successfully!');
      // Reset the form fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }
  };

  return (
    <div className="contact-form">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your Name"
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your Email"
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Your Phone Number"
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Your Message"
          />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;