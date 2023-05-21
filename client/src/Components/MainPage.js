import React, { useState, useEffect } from "react";
import VendingMachinesContainer from "./VendingMachinesContainer";

function MainPage({ userVendingMachines, viewPersonalMachines }) {
    const [allVendingMachines, setAllVendingMachines] = useState([])

    useEffect(() => {
        fetch('/vending_machines').then(response => {
            if (response.ok) {
                response.json().then(setAllVendingMachines)
            }
        })
    }, [])

    return (
        <VendingMachinesContainer
            viewPersonalMachines={viewPersonalMachines}
            vendingMachines={viewPersonalMachines ?
                userVendingMachines : allVendingMachines} />
    )
}

export default MainPage;
