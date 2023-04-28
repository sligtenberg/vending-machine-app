import React, { useState }from "react";
import Login from "./Login";
import Signup from "./Signup";

function Welcome() {
    const [loginMode, setLoginMode] = useState(true)
    return (
        <div>
            <input type="radio" id="login" name="loginModeToggle" value="true" onClick={() => setLoginMode(true)}/>
            <label for="login">Login</label>

            <input type="radio" id="signup" name="loginModeToggle" value="false" onClick={() => setLoginMode(false)}/>
            <label for="signup">Signup</label>

            {loginMode ? <Login /> : <Signup />}
        </div>
    )
}

export default Welcome;
