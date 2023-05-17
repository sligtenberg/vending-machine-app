import React from "react";
import SnackCardCustomer from "./SnackCardCustomer";

function VendingMachineCardCustomer({ vendingMachine }) {
    const snackComponents = vendingMachine.snacks
        .map(snack => <SnackCardCustomer key={snack.id} snack={snack}/>)

    return (
        <table className="vending-machine">
            <caption>{vendingMachine.name}</caption>
            <tbody>
                <tr>
                    <th>Snack</th>
                    <th>Price</th>
                    <th>Buy</th>
                </tr>
                {snackComponents}
            </tbody>
        </table>
    )
}

export default VendingMachineCardCustomer;
