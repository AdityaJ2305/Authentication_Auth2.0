import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/api/user', { withCredentials: true })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.displayName}</h1>
      <img src={user.photos[0].value} alt={user.displayName} />
    </div>
  );
};

export default Dashboard;