import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import VendingMachinesContainer from "./VendingMachinesContainer";

function MainPage({ userVendingMachines }) {
    const [allVendingMachines, setAllVendingMachines] = useState([])

    useEffect(() => {
        fetch('/vending_machines').then(response => {
            if (response.ok) {
                response.json().then(setAllVendingMachines)
            }
        })
    }, [])

    return (
        <Routes>
            <Route path="/all_vending_machines" element={
                <VendingMachinesContainer
                    vendingMachines={allVendingMachines} />
            }/>
            <Route path="/my_vending_machines" element={
                <VendingMachinesContainer
                    vendingMachines={userVendingMachines} />
            }/>
            <Route exact path="/" element={
                <VendingMachinesContainer
                    vendingMachines={allVendingMachines} />
            }/>

        </Routes>
    )
}

export default MainPage;
