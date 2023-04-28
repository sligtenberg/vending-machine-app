import React from "react";

function Login() {
    return (
        <form>
            <lable for="username">Username: </lable>
            <input type="text" id="username" />
            
            <lable for="password">Password: </lable>
            <input type="text" id="password" />

            <input type="submit"/>
        </form>
    )
}

export default Login;
