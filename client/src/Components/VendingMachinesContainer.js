import React from 'react';
import VendingMachineCard from './VendingMachineCard';

function VendingMachinesContainer({ vendingMachines, handleSnackButtonClick, setVendingMachines }) {

  function deleteVendingMachine(vendingMachineId) {
    console.log(vendingMachineId)
    fetch(`/vending_machines/${vendingMachineId}`, {method: 'DELETE'})
      .then(rspns => {
        if (rspns.ok) setVendingMachines(vendingMachines
          .filter(vendingMachine => vendingMachine.id !== vendingMachineId))
      })
  }
  
  const vendingMachineCards = vendingMachines
    .map(vendingMachine =>
      <VendingMachineCard
        key={vendingMachine.id}
        vendingMachine={vendingMachine} 
        setVendingMachines={setVendingMachines}
        handleSnackButtonClick={handleSnackButtonClick}
        deleteVendingMachine={deleteVendingMachine}/>
    )

  return (
    <div>
      <h3>Vending machines</h3>
      {vendingMachineCards}
    </div>
  )
}

export default VendingMachinesContainer;
