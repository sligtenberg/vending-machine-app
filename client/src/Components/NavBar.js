import React from "react";
import LoggedInNavBar from "./LoggedInNavBar";
import LoginForm from "./LoginForm";

function NavBar({ user, setUser, setViewPersonalMachines }) {
    return (
        user ?
            <LoggedInNavBar
                setUser={setUser}
                setViewPersonalMachines={setViewPersonalMachines}/> :
            <LoginForm setUser={setUser}/>
    )
}

export default NavBar;
