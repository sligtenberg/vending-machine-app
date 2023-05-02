import React, { useState }from "react";
import Login from "./Login";
import Signup from "./Signup";

function Welcome() {
    const [loginMode, setLoginMode] = useState(true)
    return (
        <div>
            Login <input type="radio" id="login" name="loginModeToggle" value="true" defaultChecked onClick={() => setLoginMode(true)}/>
            Signup <input type="radio" id="signup" name="loginModeToggle" value="false" onClick={() => setLoginMode(false)}/>

            {loginMode ? <Login /> : <Signup />}
        </div>
    )
}

export default Welcome;
