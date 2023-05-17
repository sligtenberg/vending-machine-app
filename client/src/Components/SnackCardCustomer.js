import React from "react";

function SnackCardCustomer ({ snack }) {
    return (
        <tr>
            <td>{snack.name}</td>
            <td>${snack.price.toFixed(2)}</td>
            <td><button>purchase</button></td>
        </tr>
    )
}

export default SnackCardCustomer;