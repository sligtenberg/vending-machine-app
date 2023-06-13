import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import VendingMachinesContainer from './VendingMachinesContainer';
import ManageSnacks from './ManageSnacks';
import InventoryUpdateForm from './InventoryUpdateForm';
import NewVendingMachineForm from './NewVendingMachineForm';
import Home from './Home';
import { UserContext } from '../Context/user';

function MainPage() {
  const [allVendingMachines, setAllVendingMachines] = useState([])
  const [userVendingMachines, setUserVendingMachines] = useState([])
  const [allSnacks, setAllSnacks] = useState([])
  const { user } = useContext(UserContext)

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
  function createInventory(newInventory) {
    fetch('/inventories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newInventory)
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
          // set in_use to true in allSnack state
          setAllSnacks(allSnacks.map(snack => {
            if (snack.id === newInventory.snack_id) {
              return {...snack, in_use: true}
            } return snack
          }))
        })
      } else rspns.json().then(rspns => alert(rspns.errors))
    })
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

  return (
    <Routes >
      <Route path='/home' element={
        <Home />
      }/>
      <Route path='/shop' element={
        <VendingMachinesContainer
          vendingMachines={allVendingMachines}
          handleSnackButtonClick={updateInventory} />
      }/>
      <Route path='/manage_vending_machines' element={
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
        <Home user={user}/>
      }/>
      <Route path="*" element={
        <h1>404 not found</h1>
      }/>
    </Routes>
  )
}

export default MainPage;
