import React, { useState } from 'react';
import './SignupPage.css'

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('confirmPassword', confirmPassword);

    // Add validation logic here
    const errorObj = {};
    if (!name) {
      errorObj.name = 'Please enter your name';
    }
    if (!email) {
      errorObj.email = 'Please enter your email';
    }
    if (!password) {
      errorObj.password = 'Please enter your password';
    }
    if (!confirmPassword) {
      errorObj.confirmPassword = 'Please confirm your password';
    }
    if (password !== confirmPassword) {
      errorObj.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errorObj).length > 0) {
      setErrors(errorObj);
    } else {
      // Send the form data to the server or API
      console.log('Form submitted successfully!');
      // Reset the form fields
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign up for an Account</h2>
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
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Your Password"
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Confirm Your Password"
          />
          {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
        </div>

        <button type="submit" className="btn btn-primary">
          Sign up
        </button>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;