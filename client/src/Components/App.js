import React, { useState, useEffect }from "react";
import MainPage from "./MainPage";
import LoginForm from "./LoginForm";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto login
    fetch("/me").then(response => {
      if (response.ok) {
        response.json().then(setUser);
      } else {
        response.json().then(error => console.log(error))
      }
    });
  }, []);

  return (
    <div>
      <h1>Stevo's Vending Machine App</h1>
      {user ? <MainPage setUser={setUser} user={user} /> : <LoginForm setUser={setUser}/>}
    </div>
  );
}

export default App;
