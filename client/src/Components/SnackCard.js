import React from 'react';
import { useLocation } from 'react-router-dom'

function SnackCard ({ snack, handleButtonClick }) {
  const path = useLocation().pathname

  function purchaseSnack() {
    const newInventory = {...snack}
    newInventory.quantity -= 1
    handleButtonClick(newInventory)
  }

  const button = () => {
    switch (path) {
      case '/all_vending_machines':
        return <button onClick={purchaseSnack}>Purchase</button>
      case '/my_vending_machines':
        return <button onClick={() => handleButtonClick(snack)}>Remove</button>
      case '/manage_snacks':
        return snack.in_use ?
          <span>(in use)</span> : <button onClick={() => handleButtonClick(snack.id)}>Delete</button>
      default:
        return <button onClick={purchaseSnack}>Purchase</button>
    }
  }

  return (
    <div className='snack-card'>
      {snack.name}
      {snack.quantity || snack.quantity === 0 ? ` (${snack.quantity})` : null}<br/>
      ${snack.price.toFixed(2)}<br/>
      {button()}
    </div>
  )
}

export default SnackCard;
