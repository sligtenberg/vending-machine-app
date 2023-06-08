import React, { useState } from 'react';

function NewVendingMachineForm({ userId, vendingMachines, setVendingMachines }) {
  const [newName, setNewName] = useState('')
  const handleChange = e => setNewName(e.target.value)

  function createNewMachine(e) {
    e.preventDefault()
    console.log({
      name: newName,
      user_id: userId
    })
    fetch('/vending_machines', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newName,
        user_id: userId
      })
    }).then(rspns => {
      if (rspns.ok) {
        rspns.json().then(newVendingMachine => setVendingMachines([...vendingMachines, newVendingMachine]))
        setNewName('')
      } else rspns.json().then(rspns => alert(rspns.errors))
    })
  }

  return (
    <div>
      <h3>New vending machine: </h3>
      <form onSubmit={createNewMachine}>
        <table><tbody><tr>
          <td><input type='text' value={newName} onChange={handleChange} placeholder='name'/></td>
          <td><input type='submit' value='Create Vending Machine'/></td>
        </tr></tbody></table>
      </form>
    </div>
  )
}

export default NewVendingMachineForm;
