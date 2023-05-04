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

    // otherwise, load the login/signup form
    else {
      return (
        <div>
          <h2>
            Login
              <input
                type="radio"
                name="loginModeToggle"
                defaultChecked
                onClick={() => setLoginMode(true)}/>
            Signup
              <input
                type="radio"
                name="loginModeToggle"
                onClick={() => setLoginMode(false)}/>
        </h2>

          {loginMode ?
            <LoginForm setUser={setUser} setLoginMode={setLoginMode}/> :
            <SignUpForm setUser={setUser} setLoginMode={setLoginMode}/>}
        </div>
      )
    }
  }

  return (
    <div>
      <h1>Stevo's Vending Machine App</h1>
      {renderPage()}
    </div>
  );
}

export default App;
