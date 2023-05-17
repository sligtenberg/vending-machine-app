import React from "react";
import VendingMachineCardOwner from "./VendingMachineCardOwner";

function UsersMachines({ vendingMachines }) {

    const vendingMachineCards = vendingMachines
        .map(vendingMachine =>
            <VendingMachineCardOwner
                key={vendingMachine.id}
                vendingMachine={vendingMachine}
            />
        )

    return (
        <div>{vendingMachineCards}</div>
    )
}

export default UsersMachines;