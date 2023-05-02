import React from "react";

function Login({ setUser }) {

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
                res.json().then(console.log("error"))
            }
        })    
    }
    return (
        <form onSubmit={handleSubmit}>
            LOGIN
            Username: <input type="text" id="username" />
            Password: <input type="text" id="password" />
            <input type="submit"/>
        </form>
    )
}

export default Login;
