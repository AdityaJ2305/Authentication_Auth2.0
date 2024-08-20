import React from 'react';

const GoogleLoginButton = () => {
  const handleLogin = () => {
    // Redirect to your backend's Google OAuth login route
    window.location.href = 'http://localhost:5001/auth/google';
  };

  return (
    <button onClick={handleLogin} style={buttonStyle}>
      Login with Google
    </button>
  );
};

// Optional styling for the button
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#4285F4',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default GoogleLoginButton;