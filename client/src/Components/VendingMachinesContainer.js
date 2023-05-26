import React from "react";
import VendingMachineCard from "./VendingMachineCard";

function VendingMachinesContainer({ vendingMachines}) {

    const vendingMachineCards = vendingMachines
        .map(vendingMachine =>
            <VendingMachineCard
                key={vendingMachine.id}
                vendingMachine={vendingMachine} />
        )

    return (
        <div>{vendingMachineCards}</div>
    )
}

export default VendingMachinesContainer;