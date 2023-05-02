import React from "react";

function Signup() {
    function onSubmit(event) {
        event.preventDefault()
        console.log(event.target[0].value)
        const newUser = {
            username: event.target[0].value,
            password: event.target[1].value
        }
        fetch('/users', {
            method: "POST",
            headers: {'Content-Type':'applicaition/json'},
            body: JSON.stringify(newUser)
        })
        .thn(res => {
            if(res.ok){
                //res.json().then(setCurrentUser)
            } else {
                res.json().then(console.log("error"))
            }
        })
    }

    return (
        <form onSubmit={onSubmit}>
            Username: <input type="text" id="username" />
            Password: <input type="text" id="password" />
            <input type="submit"/>
        </form>
    )
}

export default Signup;
