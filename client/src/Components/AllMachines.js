import React, { useEffect, useState } from "react";
import VendingMachineCardCustomer from "./VendingMachineCardCustomer";

function AllMachines() {
    const [vendingMachines, setVendingMachines] = useState([])

    useEffect(() => {
        fetch('/vending_machines').then(response => {
            if (response.ok) {
                response.json().then(setVendingMachines)
            }
        })
    }, [])

    const vendingMachineCards = vendingMachines
        .map(vendingMachine =>
            <VendingMachineCardCustomer
                key={vendingMachine.id}
                vendingMachine={vendingMachine}
            />
        )
    
    return (
        <div>{vendingMachineCards}</div>
    )
}

export default AllMachines;