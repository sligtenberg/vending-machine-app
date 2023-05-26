import React from "react";
import { useMatch } from "react-router-dom"

function SnackCard ({ snack, handleButtonClick }) {

    return (
        <td>
            {`${snack.snack_name} (${snack.quantity})`}<br/>
            ${snack.snack_price.toFixed(2)}<br/>
            <button onClick={handleButtonClick}>{useMatch('my_vending_machines') ? "Delete" : "Purchase"}</button>
        </td>
    )
}

export default SnackCard;
