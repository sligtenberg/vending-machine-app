import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import VendingMachinesContainer from './VendingMachinesContainer';
import ManageSnacks from './ManageSnacks';
import InventoryUpdateForm from './InventoryUpdateForm';
import NewVendingMachineForm from './NewVendingMachineForm';

function MainPage({ user }) {
  const [allVendingMachines, setAllVendingMachines] = useState([])
  const [userVendingMachines, setUserVendingMachines] = useState([])
  const [allSnacks, setAllSnacks] = useState([])

  function modifyState(callback) {
    setUserVendingMachines(callback(userVendingMachines))
    setAllVendingMachines(callback(allVendingMachines))
  }

  useEffect(() => {
    // fetch all vending machines
    fetch('/vending_machines').then(rspns => {
      if (rspns.ok) rspns.json().then(setAllVendingMachines)
      else rspns.json().then(console.log)
    })

    // fetch user's vending machines
    fetch(`users/${user.id}/vending_machines`).then(rspns => {
      if (rspns.ok) rspns.json().then(setUserVendingMachines)
      else rspns.json().then(console.log)
    })

    // fetch all snacks
    fetch('/snacks').then(rspns => {
      if (rspns.ok) rspns.json().then(setAllSnacks)
      else rspns.json().then(console.log)
    })
  }, [user.id]) // added the user.id dependency because react asked me to ??

  // create a vending machine
  function createVendingMachine(newName) {
    fetch('/vending_machines', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newName,
        user_id: user.id
      })
    }).then(rspns => {
      if (rspns.ok) {
        rspns.json().then(newVendingMachine => 
          modifyState(getter => [...getter, newVendingMachine]))
      } else rspns.json().then(rspns => alert(rspns.errors))
    })
  }

  // delete a vending machine
  function deleteVendingMachine(vendingMachineId) {
    fetch(`/vending_machines/${vendingMachineId}`, {method: 'DELETE'})
      .then(rspns => {
        if (rspns.ok) {
          modifyState(getter => getter.filter(vendingMachine => 
            vendingMachine.id !== vendingMachineId)
          )
        }
      })
  }

  // create an inventory
  function createInventory(inventory) {
    fetch('/inventories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inventory)
    }).then(rspns => {
      if (rspns.ok) {
        rspns.json().then(newInventory => {
          modifyState(getter => getter.map(vendingMachine => {
              if (vendingMachine.id === newInventory.vending_machine_id) {
                const newVendingMachine = {...vendingMachine}
                newVendingMachine.inventories = [...vendingMachine.inventories, newInventory]
                return newVendingMachine
              } return vendingMachine
            }))
        })
      } else rspns.json().then(rspns => alert(rspns.errors))
    })
    // need to update allSnack state to make snack in use === true
  }

  // update an inventory
  function updateInventory(updatedInventory) {
    fetch(`/inventories/${updatedInventory.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedInventory)
    }).then(rspns => {
      if (rspns.ok) {
        rspns.json().then(updatedInventory => {
          modifyState(getter => getter.map(vendingMachine => {
            if (vendingMachine.id === updatedInventory.vending_machine_id) {
              vendingMachine.inventories = vendingMachine.inventories.map(inventory => 
                inventory.id === updatedInventory.id ? updatedInventory : inventory)
              return vendingMachine
            } return vendingMachine
          }))
        })
      } else rspns.json().then(rspns => alert(rspns.errors))
    })
  }

  // delete an inventory
  function deleteInventory(inventoryToDelete) {
    fetch(`/inventories/${inventoryToDelete.id}`, {method: 'DELETE'}).then(rspns => {
      if (rspns.ok) {
        modifyState(getter => getter.map(vendingMachine => {
          if (vendingMachine.id === inventoryToDelete.vending_machine_id) {
            vendingMachine.inventories = vendingMachine.inventories
              .filter(inventory => inventory.id !== inventoryToDelete.id)
            return vendingMachine
          } return vendingMachine  
        }))
      }
    })
  }

  // purchase a snack
  function purchaseSnack() {
    console.log("buy snack!")
  }

  return (
    <Routes >
      <Route path='/all_vending_machines' element={
        <VendingMachinesContainer
          vendingMachines={allVendingMachines}
          handleSnackButtonClick={purchaseSnack} />
      }/>
      <Route path='/my_vending_machines' element={
        <div>
          <InventoryUpdateForm
            allSnacks={allSnacks}
            vendingMachines={userVendingMachines}
            createInventory={createInventory}
            updateInventory={updateInventory}/>
          <VendingMachinesContainer
            vendingMachines={userVendingMachines}
            deleteVendingMachine={deleteVendingMachine}
            handleSnackButtonClick={deleteInventory} />
          <NewVendingMachineForm
            createVendingMachine={createVendingMachine}/>
        </div>
      }/>
      <Route path='/manage_snacks' element={
        <ManageSnacks
          allSnacks={allSnacks}
          setAllSnacks={setAllSnacks}/>
      }/>
      <Route exact path='/' element={
        <VendingMachinesContainer
          vendingMachines={allVendingMachines} />
      }/>
    </Routes>
  )
}

export default MainPage;
