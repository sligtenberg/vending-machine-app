import React, { useState, useEffect }from "react";
import Login from "./Login";
import Signup from "./Signup";

function Welcome() {
    const [user, setUser] = useState(null)
    const [loginMode, setLoginMode] = useState(true)

    useEffect(() => {
        fetch("/me").then(response => {
          if (response.ok) {
            response.json().then(user => setUser(user));
          }
        });
    }, []);
    
    console.log(user)
    
    if (user) {
        return (
            <h2>Welcome, {user.username}!</h2>
        )
    } else {
        return (
            <div>
                Login <input type="radio" id="login" name="loginModeToggle" value="true" defaultChecked onClick={() => setLoginMode(true)}/>
                Signup <input type="radio" id="signup" name="loginModeToggle" value="false" onClick={() => setLoginMode(false)}/>

                {loginMode ? <Login /> : <Signup />}
            </div>
        )
    }
}

export default Welcome;
