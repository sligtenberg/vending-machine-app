import React, { useState, useEffect } from 'react';
import MainPage from './MainPage';
import NavBar from './NavBar';

function App() {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    // auto login
    fetch('/me').then(rspns => {
      if (rspns.ok) {
        rspns.json().then(setUser);
      } else {
        rspns.json().then(setErrors)
      }
    });
  }, []);

  return (
    <div>
      <h1>Stevo's Vending Machines</h1>
      <NavBar user={user} setUser={setUser} />
      {user ?
        <MainPage user={user} /> :
        <h2>{errors.errors}</h2>}
    </div>
  );
}

export default App;
