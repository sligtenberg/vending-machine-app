import React from "react";

function SnackCard({ snack, viewPersonalMachines }) {
    return (
        <tr>
            <td>{snack.name}</td>
            <td>${snack.price.toFixed(2)}</td>
            <td><button>{viewPersonalMachines ? "edit" : "purchase"}</button></td>
        </tr>
    )
}

export default SnackCard;
