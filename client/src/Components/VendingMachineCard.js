import React from "react";
import SnackCard from "./SnackCard";

function VendingMachineCard({ vendingMachine }) {

    const snackCards = vendingMachine.inventories
        .map(inventory => <SnackCard
            key={inventory.id}
            snack={inventory} />)

    for (let i = vendingMachine.inventories.length; i < 12; i++) {
        snackCards[i] = <td key={`a${i}`}></td>
    }

    return (
        <table>
            <caption>{vendingMachine.name}</caption>
            <tbody>
                <tr>{snackCards[0]}{snackCards[1 ]}{snackCards[2]}</tr>
                <tr>{snackCards[3]}{snackCards[4 ]}{snackCards[5]}</tr>
                <tr>{snackCards[6]}{snackCards[7 ]}{snackCards[8]}</tr>
                <tr>{snackCards[9]}{snackCards[10]}{snackCards[11]}</tr>
            </tbody>
        </table>
    )
}

export default VendingMachineCard