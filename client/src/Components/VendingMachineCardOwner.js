import React from "react";
import SnackCardOwner from "./SnackCardOwner";

function VendingMachineCardOwner({ vendingMachine }) {

    const snackComponents = vendingMachine.snacks
        .map(snack => <SnackCardOwner key={snack.id} snack={snack}/>)

    return (
        <table >
            <caption>{vendingMachine.name}</caption>
            <tbody>
                <tr>
                    <th>Snack</th>
                    <th>Price</th>
                    <th>Edit</th>
                </tr>
                {snackComponents}
            </tbody>
        </table>
    )
}

export default VendingMachineCardOwner