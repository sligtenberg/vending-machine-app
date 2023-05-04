import React, { useState, useEffect }from "react";
import MainPage from "./MainPage";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function App() {
  const [user, setUser] = useState(null)
  const [loginMode, setLoginMode] = useState(true)

  useEffect(() => {
    // auto login
    fetch("/me").then(response => {
      if (response.ok) {
        response.json().then(setUser);
      }
    });
  }, []);

  function renderPage() {
    // if a user is logged in, load the main page
    if (user) {
      return <MainPage setUser={setUser} user={user} />
    }
    // otherwise, load the login form
    else if (loginMode) {
      return <LoginForm setUser={setUser} setLoginMode={setLoginMode}/>
    }
    // or the sign up form
    else return <SignUpForm setUser={setUser} />
  }

  return (
    <div>
      <h1>Stevo's Vending Machine App</h1>
      {renderPage()}
    </div>
  );
}

export default App;
