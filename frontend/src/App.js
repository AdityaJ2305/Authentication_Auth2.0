import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton.jsx';
import Dashboard from './Dashboard.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Home or Login Page */}
          <Route path="/" element={<Login />} />

          {/* Dashboard Page */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

// A simple login page with the Google login button
const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <GoogleLoginButton />
    </div>
  );
};

export default App;