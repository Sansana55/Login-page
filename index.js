import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

function LoginPage() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (phone.trim() === '' || password.trim() === '') {
      setError('Please enter both phone number and password.');
      return;
    }

    // Here you can perform further validation or send login request
    // For simplicity, let's assume login is successful
    alert('Login successful!');

    // Clear error message
    setError('');
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src="your-image-url.jpg" alt="Logo" className="logo" /> {/* Add your image here */}
        <p>Login to your account</p>
      </div>
      <form onSubmit={handleSubmit} id="loginForm">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
