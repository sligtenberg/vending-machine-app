import React, { useState, useEffect }from "react";
// import { Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import NavBar from "./NavBar";

function App() {
  const [user, setUser] = useState(null)

  // true: show user's vending machines
  // false: show all vending machines
  const [viewPersonalMachines, setViewPersonalMachines] = useState(true)

  useEffect(() => {
    // auto login
    fetch("/me").then(response => {
      if (response.ok) {
        response.json().then(setUser);
      } else {
        response.json().then(console.log)
      }
    });
  }, []);

  return (
    <div>
      <h1>Stevo's Vending Machines</h1>
      <NavBar
        user={user}
        setUser={setUser}
        viewPersonalMachines={viewPersonalMachines}
        setViewPersonalMachines={setViewPersonalMachines}/>
      {user ?
        <MainPage
          viewPersonalMachines={viewPersonalMachines}
          userVendingMachines={user.vending_machines} /> :
        <h2>log in or sign up to vend!</h2>}
    </div>
  );
}

export default App;
