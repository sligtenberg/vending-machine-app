import React, { useEffect, useState } from "react";
import VendingMachineCard from "./VendingMachineCard";

function AllMachines() {
    const [vendingMachines, setVendingMachines] = useState([])
    console.log(vendingMachines)

    useEffect(() => {
        fetch('/vending_machines').then(response => {
            if (response.ok) {
                response.json().then(setVendingMachines)
            }
        })
    }, [])

    const vendingMachineComponents = vendingMachines
        .map(vendingMachine => <VendingMachineCard key={vendingMachine.id} vendingMachine={vendingMachine}/>)
    
    return (
        <div>{vendingMachineComponents}</div>
    )
}

export default AllMachines;