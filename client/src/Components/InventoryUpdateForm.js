import React, { useState } from 'react';

function InventoryUpdateForm({ allSnacks, vendingMachines, createInventory, updateInventory }) {
  const [newInventory, setNewInventory] = useState({
    vending_machine_id: '',
    snack_id: '',
    quantity: ''
  })

  // update form state 
  const handleChange = e => setNewInventory({...newInventory, [e.target.name]: e.target.value})

  // create a new inventory, or update an existing one
  function handleSubmit(e) {
    e.preventDefault()

    // search the vending machine for a matching inventory
    const existingInventory = (vendingMachines
      .find(({id}) => id === parseInt(newInventory.vending_machine_id)).inventories
      .find(({snack_id}) => snack_id === parseInt(newInventory.snack_id)))

    // if inventory exists, send a patch request to update the quantity
    if (existingInventory) {
      const updatedInventory = {...existingInventory}
      updatedInventory.quantity = parseInt(existingInventory.quantity) + parseInt(newInventory.quantity)
      updateInventory(updatedInventory)
    }
    
    // else, send a post request to create one and add it to the vending machine
    else createInventory(newInventory)
  }

  const vendingMachineOptions = vendingMachines.map(vendingMachine =>
    <option
      key={vendingMachine.id}
      value={vendingMachine.id}>
      {vendingMachine.name}
    </option>)

  const snackOptions = allSnacks.map(snack =>
    <option
      key={snack.id}
      value={snack.id}>
      {`${snack.name}, $${snack.price.toFixed(2)}`}
    </option>)
  
  return (
    <form onSubmit={handleSubmit}>
      <h3>Select a vending machine and a snack to add to it</h3>
      <table><tbody>
        <tr>
          <td className='float-right'>Vending machine:</td>
          <td><select
            value={newInventory.vending_machine_id}
            name='vending_machine_id'
            onChange={handleChange}>
              <option>select vending machine</option>
              {vendingMachineOptions}
          </select></td>
        </tr>
        <tr>
          <td className='float-right'>Snack to add:</td>
          <td><select
            value={newInventory.snack_id}
            name='snack_id'
            onChange={handleChange}>
              <option>select snack</option>
              {snackOptions}
          </select></td>
        </tr>
        <tr>
          <td className='float-right'>Quantity:</td>
          <td><input
            type='number'
            name='quantity'
            value={newInventory.quantity}
            onChange={handleChange}/></td>
        </tr>
        <tr>
          <td></td>
          <td><input type='submit' value='Add Snack'/></td></tr>
      </tbody></table> 
    </form>
  )
}

export default InventoryUpdateForm;