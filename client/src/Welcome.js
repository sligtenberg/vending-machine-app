import React, { useState }from "react";
import Login from "./Login";
import Signup from "./Signup";

function Welcome({ setUser }) {
    const [loginMode, setLoginMode] = useState(true)

    return (
        <h2>
            Login <input type="radio" id="login" name="loginModeToggle" value="true" defaultChecked onClick={() => setLoginMode(true)}/>
            Signup <input type="radio" id="signup" name="loginModeToggle" value="false" onClick={() => setLoginMode(false)}/>

            {loginMode ? <Login setUser={setUser}/> : <Signup setUser={setUser}/>}
        </h2>
    )
}

export default Welcome;
