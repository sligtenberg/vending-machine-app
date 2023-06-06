import React from "react";
import { NavLink } from "react-router-dom"

function LoggedInNavBar({ setUser }) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => setUser(null));      
    }

    return (
        <nav>
            <NavLink to="/all_vending_machines"><button>All Vending Machines</button></NavLink>
            <NavLink to="/my_vending_machines"><button>My Vending Machines</button></NavLink>
            <NavLink to="/manage_snacks"><button>Manage Snacks</button></NavLink>
            <button onClick={handleLogout} className="float-right">Log Out</button>
        </nav>
    )
}

export default LoggedInNavBar;
