import React, { useState } from 'react';

function NewVendingMachineForm({ createVendingMachine }) {
  const [newName, setNewName] = useState('')
  const handleChange = e => setNewName(e.target.value)

  function handleSubmit(e) {
    e.preventDefault()
    createVendingMachine(newName)
    setNewName('')
  }

  return (
    <div>
      <h3>New vending machine: </h3>
      <form onSubmit={handleSubmit}>
        <table><tbody><tr>
          <td><input type='text' value={newName} onChange={handleChange} placeholder='name'/></td>
          <td><input type='submit' value='Create Vending Machine'/></td>
        </tr></tbody></table>
      </form>
    </div>
  )
}

export default NewVendingMachineForm;
