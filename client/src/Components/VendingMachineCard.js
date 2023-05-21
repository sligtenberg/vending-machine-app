import React from "react";
import SnackCard from "./SnackCard";

function VendingMachineCard({ viewPersonalMachines, vendingMachine }) {

    const snackCards = vendingMachine.snacks
        .map(snack => <SnackCard
            key={snack.id}
            snack={snack}
            viewPersonalMachines={viewPersonalMachines} />)

    return (
        <table>
            <caption>{vendingMachine.name}</caption>
            <tbody>
                <tr>
                    <th>Snack</th>
                    <th>Price</th>
                    <th>Edit</th>
                </tr>
                {snackCards}
            </tbody>
        </table>
    )
}

export default VendingMachineCard