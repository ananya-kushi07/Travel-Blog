import React, { useState } from 'react';
import './Login.css'
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    // Add validation logic here
    const errorObj = {};
    if (!email) {
      errorObj.email = 'Please enter your email';
    }
    if (!password) {
      errorObj.password = 'Please enter your password';
    }

    if (Object.keys(errorObj).length > 0) {
      setErrors(errorObj);
    } else {
      // Send the form data to the server or API
      console.log('Form submitted successfully!');
      // Reset the form fields
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="login-form">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
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


        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;