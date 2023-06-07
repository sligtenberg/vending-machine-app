import React from "react";

function AddSnackForm({ allSnacks, vendingMachines, setUserVendingMachines }) {

  // create a new inventory
  function handleFormSubmit(event) {
    event.preventDefault()
    fetch("/inventories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vending_machine_id: event.target[0].value,
        snack_id: event.target[1].value,
        quantity: event.target[2].value
      })
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
      } else {
        rspns.json().then(rspns => alert(rspns.errors))
      }
    })
  }

  const vendingMachineOptions = vendingMachines.map(vendingMachine =>
    <option value={vendingMachine.id} key={vendingMachine.id}>
      {vendingMachine.name}</option>)

  const snackOptions = allSnacks.map(snack =>
    <option value={snack.id} key={snack.id}>
      {`${snack.name}, $${snack.price.toFixed(2)}`}</option>)
  
  return (
    <form onSubmit={event => handleFormSubmit(event)}>
      <h3>Select a vending machine and a snack to add to it</h3>
      <table>
        <tbody>
          <tr>
            <td className="float-right">Vending machine:</td>
            <td><select>
              <option>select vending machine</option>
              {vendingMachineOptions}
            </select></td>
          </tr>
          <tr>
            <td className="float-right">Snack to add:</td>
            <td><select>
              <option>select snack</option>
              {snackOptions}
            </select></td>
          </tr>
          <tr>
            <td className="float-right">Quantity:</td>
            <td><input type="number"/></td>
          </tr>
          <tr>
            <td></td>
            <td><input type="submit" value="Add Snack"/></td></tr>
        </tbody>
      </table> 
    </form>
  )
}

export default AddSnackForm;