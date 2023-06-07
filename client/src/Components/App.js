import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";
import NavBar from "./NavBar";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto login
    fetch("/me").then(rspns => {
      if (rspns.ok) {
        rspns.json().then(setUser);
      } else {
        rspns.json().then(console.log)
      }
    });
  }, []);

  return (
    <div>
      <h1>Stevo's Vending Machines</h1>
      <NavBar user={user} setUser={setUser} />
      {user ?
        <MainPage user={user} /> :
        <h2>log in or sign up to vend!</h2>}
    </div>
  );
}

export default App;
