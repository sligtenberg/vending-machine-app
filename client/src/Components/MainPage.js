import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import VendingMachinesContainer from "./VendingMachinesContainer";
import ManageSnacks from "./ManageSnacks";
import AddSnackForm from "./AddSnackForm";
import NewVendingMachineForm from "./NewVendingMachineForm";

function MainPage({ user }) {
    const [allVendingMachines, setAllVendingMachines] = useState([])
    const [userVendingMachines, setUserVendingMachines] = useState([])
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

        // fetch user's vending machines
        fetch(`users/${user.id}/vending_machines`).then(response => {
            if (response.ok) {
                response.json().then(setUserVendingMachines)

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

    // remove a snack from a user vending machine
    function removeSnack(inventoryToDelete) {
        fetch(`/inventories/${inventoryToDelete.id}`, {method: "DELETE"})
            .then(response => {
                if (response.ok) {
                    setUserVendingMachines(userVendingMachines.map(vendingMachine => {
                        if (vendingMachine.id === inventoryToDelete.vending_machine_id){
                            vendingMachine.inventories = vendingMachine.inventories
                                .filter(inventory => inventory.id !== inventoryToDelete.id)
                            return vendingMachine
                        } return vendingMachine
                    }))
                }
            })
    }

    // purchase a snack
    function purchaseSnack() {

    }

    return (
        <Routes >
            <Route path="/all_vending_machines" element={
                <VendingMachinesContainer
                    vendingMachines={allVendingMachines}
                    handleSnackButtonClick={purchaseSnack} />
            }/>
            <Route path="/my_vending_machines" element={
                <div>
                    <AddSnackForm
                        allSnacks={allSnacks}
                        vendingMachines={userVendingMachines}
                        setUserVendingMachines={setUserVendingMachines}/>
                    <NewVendingMachineForm />
                    <VendingMachinesContainer
                        vendingMachines={userVendingMachines}
                        handleSnackButtonClick={removeSnack} />
                </div>
            }/>
            <Route path="/manage_snacks" element={
                <ManageSnacks
                    allSnacks={allSnacks}
                    setAllSnacks={setAllSnacks}
                    setUserVendingMachines={setUserVendingMachines}/>
            }/>
            <Route exact path="/" element={
                <VendingMachinesContainer
                    vendingMachines={allVendingMachines} />
            }/>

        </Routes>
    )
}

export default MainPage;
