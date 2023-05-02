import React from "react";

function Login() {
    return (
        <form>
            Username: <input type="text" id="username" />
            Password: <input type="text" id="password" />
            <input type="submit"/>
        </form>
    )
}

export default Login;
