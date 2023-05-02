import React, { useState, useEffect }from "react";
import Login from "./Login";
import Signup from "./Signup";

function Welcome() {
    const [user, setUser] = useState(null)
    const [loginMode, setLoginMode] = useState(true)

    useEffect(() => {
        fetch("/me").then(response => {
            if (response.ok) {
              response.json().then(setUser);
            }
        });
    }, []);

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => setUser(null));      
    }

    if (user) {
        return (
            <h2>
                Welcome, {user.username}!
                <button onClick={handleLogout}>Logout</button>
            </h2>
        )
    } else {
        return (
            <h2>
                Login <input type="radio" id="login" name="loginModeToggle" value="true" defaultChecked onClick={() => setLoginMode(true)}/>
                Signup <input type="radio" id="signup" name="loginModeToggle" value="false" onClick={() => setLoginMode(false)}/>

                {loginMode ? <Login setUser={setUser}/> : <Signup setUser={setUser}/>}
            </h2>
        )
    }
}

export default Welcome;
