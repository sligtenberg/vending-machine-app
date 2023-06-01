import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import VendingMachinesContainer from "./VendingMachinesContainer";
import ManageSnacks from "./ManageSnacks";

function MainPage({ userVendingMachines }) {
    const [allVendingMachines, setAllVendingMachines] = useState([])
    const [allSnacks, setAllSnacks] = useState([])

    useEffect(() => {
        // fetch all vending machines
        fetch('/vending_machines').then(response => {
            if (response.ok) {
                response.json().then(setAllVendingMachines)
            } else {
                response.json().then(console.log)
            }
        })

        // fetch all snacks
        fetch("/snacks").then(response => {
            if (response.ok) {
                response.json().then(setAllSnacks);
            } else {
                response.json().then(console.log)
            }
        })
    }, [])

    return (
        <Routes >
            <Route path="/all_vending_machines" element={
                <VendingMachinesContainer
                    vendingMachines={allVendingMachines} />
            }/>
            <Route path="/my_vending_machines" element={
                <VendingMachinesContainer
                    vendingMachines={userVendingMachines} />
            }/>
            <Route path="/manage_snacks" element={
                <ManageSnacks allSnacks={allSnacks} setAllSnacks={setAllSnacks}/>
            }/>
            <Route exact path="/" element={
                <VendingMachinesContainer
                    vendingMachines={allVendingMachines} />
            }/>

        </Routes>
    )
}

export default MainPage;
