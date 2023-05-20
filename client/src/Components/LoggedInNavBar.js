import React from "react";

function LoggedInNavBar({ setUser, setEditMode }) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => setUser(null));      
    }

    return (
        <nav>
            <button onClick={() => setEditMode(true)}>Your Vending Machines</button>
            <button onClick={() => setEditMode(false)}>All Vending Machines</button>
            <button onClick={handleLogout} className="float-right">Logout</button>
        </nav>
    )
}

export default LoggedInNavBar;
