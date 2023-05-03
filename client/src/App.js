import React, { useState, useEffect }from "react";
import Welcome from "./Welcome";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then(response => {
      if (response.ok) {
        response.json().then(setUser);
      }
    });
  }, []);

  return (
    <div>
      <h1>Stevo's Vending Machine App</h1>
      {user ? <Home setUser={setUser}/> : <Welcome setUser={setUser}/>}
    </div>
  );
}

export default App;
