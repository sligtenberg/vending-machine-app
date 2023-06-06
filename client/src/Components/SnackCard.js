import React from "react";
import { useLocation } from 'react-router-dom'

function SnackCard ({ snack, handleButtonClick }) {
    const path = useLocation().pathname

    const button = () => {
        switch (path) {
            case "/all_vending_machines": return <button onClick={() => handleButtonClick(snack)}>Purchase</button>
            case "/my_vending_machines": return <button onClick={() => handleButtonClick(snack)}>Remove</button>
            case "/manage_snacks" : return snack.is_used ? "(in use)" : <button onClick={() => handleButtonClick(snack.id)}>Delete</button>
        }
    }

    return (
        <div className="snack-card">
            {snack.name}{snack.quantity ? ` (${snack.quantity})` : null}<br/>
            ${snack.price.toFixed(2)}<br/>
            {button()}
        </div>
    )
}

export default SnackCard;
