import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import SnackUsage from './Modals/SnackUsage'
import UpdateInventory from './Modals/UpdateInventory';

function SnackCard ({ inventory, updateInventory, handleButtonClick }) {
  const path = useLocation().pathname
  const [showSnackUsage, setShowSnackUsage] = useState(false);
  const [showUpdateInventory, setShowUpdateInventory] = useState(false);

  // in managa snacks, this button either allows a user to see which
  // vending machines a snack is used in, or allows a user to delete a snack
  const usedByBtn = () => {
    if (inventory.vending_machines.length) {
      return <button onClick={() => setShowSnackUsage(true)}>Used By:</button>
    } return <button onClick={() => handleButtonClick(inventory.id)}>Delete</button>
  }

  // in /shop this button purchases a snack
  // in /manage_vending_machines_ this button allows a user to edit inventories
  // in /manage_snacks, this button's use depends on the usedBy function
  const button = () => {
    switch (path) {
      case '/shop':
        return <button onClick={() => handleButtonClick(inventory.id)}>Purchase</button>
      case '/manage_vending_machines':
        return (
          <div>
            <button onClick={() => setShowUpdateInventory(true)}>Edit</button>
            <button onClick={() => handleButtonClick(inventory)}>X</button>
          </div>
        )
      default:
        return usedByBtn()
    }
  }

  return (
    <div className='snack-card'>
      {inventory.name}
      {inventory.quantity || inventory.quantity === 0 ? ` (${inventory.quantity})` : null}<br/>
      ${inventory.price.toFixed(2)}<br/>
      {button()}
      {showSnackUsage ?
        <SnackUsage
          setShowSnackUsage={setShowSnackUsage}
          snackName={inventory.name}
          vendingMachines={inventory.vending_machines}/> :
        null}
      {showUpdateInventory ?
        <UpdateInventory 
          inventory={inventory}
          setShowUpdateInventory={setShowUpdateInventory}
          updateInventory={updateInventory}/> :
        null}
    </div>
  )
}

export default SnackCard;
