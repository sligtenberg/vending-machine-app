import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../Context/user';
import NavBar from './NavBar';
import MainPage from './MainPage';

function App() {
  const { user, setUser } = useContext(UserContext)
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
  }, [setUser])  // added the setUser dependency because react asked me to ??

  return (
    <div>
      <h1>Stevo's Vending Machines</h1>
      <NavBar />
      {user ?
        <MainPage user={user} /> :
        <h2>{errors.errors}</h2>}
    </div>
  );
}

export default App;
