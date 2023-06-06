import React from "react";
import VendingMachineCard from "./VendingMachineCard";

function VendingMachinesContainer({ vendingMachines, handleSnackButtonClick }) {

    const vendingMachineCards = vendingMachines
        .map(vendingMachine =>
            <VendingMachineCard
                key={vendingMachine.id}
                vendingMachine={vendingMachine} 
                handleSnackButtonClick={handleSnackButtonClick}/>
        )

    return (
        <div>
            <h3>Your vending machines</h3>
            {vendingMachineCards}
        </div>
    )
}

export default VendingMachinesContainer;