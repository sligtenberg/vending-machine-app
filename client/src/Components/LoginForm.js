import React from "react";

function LoginForm({ setUser }) {

    function handleSubmit(event) {
        event.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: event.target[0].value,
                password: event.target[1].value
            })
        })
        .then(res => {
            if(res.ok){
                console.log("here")
                res.json().then(setUser)
            } else {
                res.json().then(alert("Unrecognized credentials"))
            }
        })    
    }
    return (
        <form onSubmit={handleSubmit}>
            Username: <input type="text" id="username" />
            Password: <input type="text" id="password" />
            <input type="submit" value="Log In"/>
        </form>
    )
}

export default LoginForm;
