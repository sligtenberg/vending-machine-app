import React from "react";

function SnackCardCustomer ({ snack }) {
    console.log(typeof(snack.price))
    return (
        <tr>
            <td>{snack.name}</td>
            <td>${snack.price.toFixed(2)}</td>
        </tr>
    )
}

export default SnackCardCustomer;