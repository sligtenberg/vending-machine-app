import React, { useState } from "react";

function LoginForm({ setUser }) {
    const [loginMode, setLoginMode] = useState(true)

    function handleSubmit(event) {
        event.preventDefault()
        fetch((loginMode ? "/login" : "/users"), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: event.target[0].value,
                password: event.target[1].value
            })
        })
        .then(res => {
            if(res.ok){
                res.json().then(setUser)
            } else {
                res.json().then(console.log("error"))
            }
        })    
    }

    return (
        <div>
            <h2>
                Login <input
                    type="radio"
                    name="loginModeToggle"
                    defaultChecked
                    onClick={() => setLoginMode(true)}/>
                Signup <input
                    type="radio"
                    name="loginModeToggle"
                    onClick={() => setLoginMode(false)}/>
            </h2>

            <form onSubmit={handleSubmit}>
                Username: <input type="text" id="username" />
                Password: <input type="text" id="password" />
                <input type="submit" value={loginMode ? "Log In" : "Create Account"}/>
            </form>
        </div>

    )
}

export default LoginForm;
