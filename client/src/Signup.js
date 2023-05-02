import React from "react";

function Signup() {
    function onSubmit(event) {
        event.preventDefault()
        const newUser = {
            username: event.target[0].value,
            password: event.target[1].value
        }
        console.log(newUser)
        fetch('/users', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newUser)
        })
        .then(res => {
            if(res.ok){
                //res.json().then(setCurrentUser)
            } else {
                res.json().then(console.log("error"))
            }
        })
    }

    return (
        <form onSubmit={onSubmit}>
            SIGNUP
            Username: <input type="text" id="username" />
            Password: <input type="text" id="password" />
            <input type="submit"/>
        </form>
    )
}

export default Signup;
