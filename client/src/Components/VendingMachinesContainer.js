import React from 'react';
import VendingMachineCard from './VendingMachineCard';

function VendingMachinesContainer({ vendingMachines, updateInventory, handleSnackButtonClick, deleteVendingMachine }) {
  
  const vendingMachineCards = vendingMachines
    .map(vendingMachine =>
      <VendingMachineCard
        key={vendingMachine.id}
        vendingMachine={vendingMachine} 
        handleSnackButtonClick={handleSnackButtonClick}
        deleteVendingMachine={deleteVendingMachine}
        updateInventory={updateInventory}/>
    )

  return (
    <div>
      <h3>Vending machines</h3>
      {vendingMachineCards}
    </div>
  )
}

export default VendingMachinesContainer;
