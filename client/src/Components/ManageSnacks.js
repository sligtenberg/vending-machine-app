import React, { useState } from 'react';
import SnackCard from './SnackCard';

function ManageSnacks({ allSnacks, setAllSnacks }) {
  const [newSnack, setNewSnack] = useState({name: '', price: ''})

  const handleChange = e => setNewSnack({...newSnack, [e.target.name]: e.target.value})

  const snackCards = allSnacks.map(snack => 
    <SnackCard className='snack-card'
      key={snack.id}
      inventory={snack}
      handleButtonClick={handleDeleteSnack}/>)

  // create a new snack
  function handleSubmit (e) {
    e.preventDefault()
    fetch('/snacks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSnack)
    }).then(rspns => {
      if (rspns.ok) {
        rspns.json().then(newSnack => setAllSnacks([...allSnacks, newSnack]))
        setNewSnack({name: '', price: ''})
      } else rspns.json().then(rspns => alert(rspns.errors))
    })
  }

  // delete a snack
  function handleDeleteSnack(snackToDeleteId) {
    fetch(`/snacks/${snackToDeleteId}`, {method: 'DELETE'})
      .then(rspns => {
        if (rspns.ok) setAllSnacks(allSnacks.filter(snack => snack.id !== snackToDeleteId))
        else alert("Something went wrong")
      })
  }

  return (
    <div>
      <h3>Submit form to create a new snack</h3>
      <form onSubmit={handleSubmit}>
        <table><tbody>
          <tr><td>Name: </td><td><input type='text'   value={newSnack.name}  name='name'  onChange={handleChange} /></td></tr>
          <tr><td>Price:</td><td><input type='number' value={newSnack.price} name='price' onChange={handleChange} step='0.01'/></td></tr>
          <tr><td>      </td><td><input type='submit' value='Create Snack'/></td></tr>
        </tbody></table> 
      </form>
      <h3>Current Snacks</h3>
      <div className='vending-machine-card'>
        <div className='snack-container'>{snackCards}</div>
      </div>
    </div>
  )
}

export default ManageSnacks;
