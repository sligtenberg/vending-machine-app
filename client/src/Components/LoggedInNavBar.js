import React from "react";

function LoggedInNavBar({ setUser, setViewPersonalMachines }) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => setUser(null));      
    }

    return (
        <nav>
            <button onClick={() => setViewPersonalMachines(true)}>Your Vending Machines</button>
            <button onClick={() => setViewPersonalMachines(false)}>All Vending Machines</button>
            <button onClick={handleLogout} className="float-right">Log Out</button>
        </nav>
    )
}

export default LoggedInNavBar;
