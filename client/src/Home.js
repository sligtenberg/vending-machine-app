import React, { useState } from "react";
import AllMachines from "./AllMachines";
import UsersMachines from "./UsersMachines";

function Home({ setUser }) {
    const [view, setView] = useState("AllMachines")

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => setUser(null));      
    }

    return (
        <nav>
            <button onClick={handleLogout}>Logout</button>
            <AllMachines />
            <UsersMachines />
        </nav>
    )
}

export default Home;
