import React, { useState } from "react";
import AllMachines from "./AllMachines";
import UsersMachines from "./UsersMachines";

function MainPage({ setUser, user }) {
    const [usersVendingMachines, setUsersVendingMachines] = useState(false)

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => setUser(null));      
    }

    return (
        <nav>
            <button onClick={() => setUsersVendingMachines(true)}>Your Vending Machines</button>
            <button onClick={() => setUsersVendingMachines(false)}>All Vending Machines</button>
            <button onClick={handleLogout}>Logout</button>
            {usersVendingMachines ? <UsersMachines user={user} /> : <AllMachines />}
        </nav>
    )
}

export default MainPage;
