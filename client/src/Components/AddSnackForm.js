import React, { useState } from "react";

function AddSnackForm({ allSnacks, vendingMachines, setUserVendingMachines }) {
  const [newInventory, setNewInventory] = useState({
    vending_machine_id: "",
    snack_id: "",
    quantity: ""
  })

  const handleChange = e => setNewInventory({...newInventory, [e.target.name]: e.target.value})

  // create a new inventory
  function handleFormSubmit(e) {
    e.preventDefault()

    // find an inventory in the vending machine that is being updated which is for the same snack as that which is being added
    const existingInventory = (vendingMachines
      .find(({id}) => id === parseInt(newInventory.vending_machine_id)).inventories
      .find(({snack_id}) => snack_id === parseInt(newInventory.snack_id)))

    // if that inventory exists, we send a patch request to update the quantity
    if (existingInventory) {
      fetch(`/inventories/${existingInventory.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...newInventory, quantity: parseInt(newInventory.quantity) + parseInt(existingInventory.quantity)})
      }).then(rspns => {
        if (rspns.ok) {
          rspns.json().then(newInventory => {
            setUserVendingMachines(vendingMachines
              .map(vendingMachine => {
              if (vendingMachine.id === newInventory.vending_machine_id) {
                vendingMachine.inventories = vendingMachine.inventories
                  .map(inventory => inventory.id === newInventory.id ? newInventory : inventory)
                return vendingMachine
              } return vendingMachine
            }))
          });
        } else rspns.json().then(rspns => alert(rspns.errors))
      })
    }
    
    // otherwise, we send a post request to add it to the vedning machine
    else {
      fetch("/inventories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newInventory)
      }).then(rspns => {
        if (rspns.ok) {
          rspns.json().then(newInventory => {
            setUserVendingMachines(vendingMachines.map(vendingMachine => {
              if (vendingMachine.id === newInventory.vending_machine_id) {
                vendingMachine.inventories = [...vendingMachine.inventories, newInventory]
                return vendingMachine
              } return vendingMachine
            }))
          });
        } else rspns.json().then(rspns => alert(rspns.errors))
      })
    }
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
    <form onSubmit={handleFormSubmit}>
      <h3>Select a vending machine and a snack to add to it</h3>
      <table><tbody>
        <tr>
          <td className="float-right">Vending machine:</td>
          <td><select
            value={newInventory.vending_machine_id}
            name={"vending_machine_id"}
            onChange={handleChange}>
              <option value={""}>select vending machine</option>
              {vendingMachineOptions}
          </select></td>
        </tr>
        <tr>
          <td className="float-right">Snack to add:</td>
          <td><select
            value={newInventory.snack_id}
            name={"snack_id"}
            onChange={handleChange}>
              <option value={""}>select snack</option>
              {snackOptions}
          </select></td>
        </tr>
        <tr>
          <td className="float-right">Quantity:</td>
          <td><input
            type="number"
            name="quantity"
            value={newInventory.quantity}
            onChange={handleChange}/></td>
        </tr>
        <tr>
          <td></td>
          <td><input type="submit" value="Add Snack"/></td></tr>
      </tbody></table> 
    </form>
  )
}

export default AddSnackForm;