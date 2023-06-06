import React from "react";
import SnackCard from "./SnackCard";

function VendingMachineCard({ vendingMachine, handleSnackButtonClick }) {

    const snackCards = vendingMachine.inventories
        .map(inventory => <SnackCard
            key={inventory.id}
            snack={inventory} 
            handleButtonClick={handleSnackButtonClick}/>)

    for (let i = vendingMachine.inventories.length; i < 12; i++) {
        snackCards[i] = <div className="snack-card" key={`a${i}`}></div>
    }

    return (
        <div className="vending-machine-card">
            <h2>{vendingMachine.name}</h2>
            <div className="grid">{snackCards}</div>
        </div>
    )
}

export default VendingMachineCard