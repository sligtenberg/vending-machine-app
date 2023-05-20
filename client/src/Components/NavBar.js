import React from "react";
import LoggedInNavBar from "./LoggedInNavBar";
import LoginForm from "./LoginForm";

function NavBar({ user, setUser, setEditMode }) {
    return (
        user ?
            <LoggedInNavBar setUser={setUser} setEditMode={setEditMode}/> :
            <LoginForm setUser={setUser}/>
    )
}

export default NavBar;
