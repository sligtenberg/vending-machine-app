import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { SnackUsage } from './SnackUsage'

function SnackCard ({ snack, handleButtonClick }) {
  const path = useLocation().pathname
  const [showSnackUsage, setShowSnackUsage] = useState(false);

  function purchaseSnack() {
    const newInventory = {...snack}
    newInventory.quantity -= 1
    handleButtonClick(newInventory)
  }

  const usedByBtn = () => {
    if (snack.vending_machines.length) {
      return <button onClick={() => setShowSnackUsage(true)}>Used By:</button>
    } return <button onClick={() => handleButtonClick(snack.id)}>Delete</button>
  }

  const button = () => {
    switch (path) {
      case '/shop':
        return <button onClick={purchaseSnack}>Purchase</button>
      case '/manage_vending_machines':
        return <button onClick={() => handleButtonClick(snack)}>Remove</button>
      default:
        return usedByBtn()
    }
  }

  return (
    <div className='snack-card'>
      {snack.name}
      {snack.quantity || snack.quantity === 0 ? ` (${snack.quantity})` : null}<br/>
      ${snack.price.toFixed(2)}<br/>
      {button()}
      {showSnackUsage ? <SnackUsage setShowSnackUsage={setShowSnackUsage} snackName={snack.name} vendingMachines={snack.vending_machines}/> : null}
    </div>
  )
}

export default SnackCard;
