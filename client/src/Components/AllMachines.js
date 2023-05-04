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

    const vendingMachineComponents = vendingMachines
        .map(vendingMachine => <VendingMachineCardCustomer key={vendingMachine.id} vendingMachine={vendingMachine}/>)
    
    return (
        <div>{vendingMachineComponents}</div>
    )
}

export default AllMachines;