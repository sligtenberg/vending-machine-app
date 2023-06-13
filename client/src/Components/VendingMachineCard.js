import React from 'react';
import { useLocation } from 'react-router-dom'
import SnackCard from './SnackCard';

function VendingMachineCard({ vendingMachine, handleSnackButtonClick, deleteVendingMachine }) {
  const path = useLocation().pathname

  const snackCards = vendingMachine.inventories
    .map(inventory => <SnackCard
      key={inventory.id}
      snack={inventory} 
      handleButtonClick={handleSnackButtonClick}/>)

  for (let i = vendingMachine.inventories.length; i < 12; i++) {
    snackCards[i] = <div className='snack-card' key={`a${i}`}></div>
  }

  return (
    <div className='vending-machine-card'>
      {path === '/manage_vending_machines' ? 
        <button className='float-right' onClick={() => deleteVendingMachine(vendingMachine.id)}>X</button> : null}
      <h2>{vendingMachine.name}</h2>
      <div className='snack-container'>{snackCards}</div>
    </div>
  )
}

export default VendingMachineCard;
