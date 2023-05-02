import React from "react";

function Signup() {
    function onSubmit(event) {
        event.preventDefault()
        console.log(event.target[0].value)
        const newUser = {
            username: event.target[0].value,
            password: event.target[1].value,
            email: event.target[2].value
        }
        fetch('/users', {
            method: "POST",
            headers: {'Content-Type':'applicaition/json'},
            body: JSON.stringify(newUser)
        })
    }

    return (
        <form onSubmit={onSubmit}>
            Username: <input type="text" id="username" />
            Password: <input type="text" id="password" />
            Email: <input type="text" id="email" />
            <input type="submit"/>
        </form>
    )
}

export default Signup;
