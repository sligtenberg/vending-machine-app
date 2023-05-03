import React from "react";
import VendingMachineCardOwner from "./VendingMachineCardOwner";

function UsersMachines({ user }) {
    console.log(user.vending_machines)

    const vendingMachines = user.vending_machines
        .map(vendingMachine => <VendingMachineCardOwner key={vendingMachine.id} vendingMachine={vendingMachine}/>)

    return (
        <div>{vendingMachines}</div>
    )
}

export default UsersMachines;