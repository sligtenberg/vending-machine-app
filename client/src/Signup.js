import React from "react";

function Signup() {
    return (
        <form>
            <lable for="username">Username: </lable>
            <input type="text" id="username" />

            <lable for="password">Password: </lable>
            <input type="text" id="password" />

            <lable for="email">Email: </lable>
            <input type="text" id="email" />
        </form>
    )
}

export default Signup;
