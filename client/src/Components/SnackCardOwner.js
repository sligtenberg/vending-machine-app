import React from "react";

function SnackCardOwner({ snack }) {
    return (
        <tr>
            <td>{snack.name}</td>
            <td>${snack.price.toFixed(2)}</td>
            <td><button>edit</button></td>

        </tr>
    )
}

export default SnackCardOwner;
