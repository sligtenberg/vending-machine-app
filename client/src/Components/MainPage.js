import React from "react";
import AllMachines from "./AllMachines";
import UsersMachines from "./UsersMachines";

function MainPage({ user, editMode }) {

    return (
        <div>
            {editMode ? <UsersMachines vendingMachines={user.vending_machines} /> : <AllMachines />}
        </div>
    )
}

export default MainPage;
