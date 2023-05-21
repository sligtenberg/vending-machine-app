import React from "react";
import VendingMachineCard from "./VendingMachineCard";

function VendingMachinesContainer({ viewPersonalMachines, vendingMachines }) {

    const vendingMachineCards = vendingMachines
        .map(vendingMachine =>
            <VendingMachineCard
                key={vendingMachine.id}
                vendingMachine={vendingMachine}
                viewPersonalMachines={viewPersonalMachines}/>
        )

    return (
        <div>{vendingMachineCards}</div>
    )
}

export default VendingMachinesContainer;