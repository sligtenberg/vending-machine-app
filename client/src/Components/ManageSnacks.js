import React, { useState } from "react";
import SnackCard from "./SnackCard";

function ManageSnacks({ allSnacks, setAllSnacks }) {
  const [newSnackForm, setNewSnackForm] = useState({
    name: "",
    price: ""
  })

  function handleFormChange(event) {
    setNewSnackForm({...newSnackForm, [event.target.name]: event.target.value})
  }

  const snackCards = allSnacks.map(snack => 
    <SnackCard className="snack-card"
      key={snack.id}
      snack={snack}
      handleButtonClick={handleDeleteSnack}/>)

  // create a new snack
  function handleFormSubmit (event) {
    event.preventDefault()
    fetch("/snacks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSnackForm)
    }).then(rspns => {
      if (rspns.ok) {
        rspns.json().then(newSnack => setAllSnacks([...allSnacks, newSnack]));
      } else rspns.json().then(rspns => alert(rspns.errors))
    })
  }

  // delete a snack
  function handleDeleteSnack(snackToDeleteId) {
    fetch(`/snacks/${snackToDeleteId}`, {method: "DELETE"})
      .then(rspns => {
          if (rspns.ok) {
              setAllSnacks(allSnacks.filter(snack => snack.id !== snackToDeleteId))
          }
      })
  }

  return (
    <div>
      <h3>Submit form to create a new snack</h3>
      <form onSubmit={handleFormSubmit}>
        <table><tbody>
          <tr><td>Name: </td><td><input type="text"   value={newSnackForm.name}  name="name"  onChange={handleFormChange} /></td></tr>
          <tr><td>Price:</td><td><input type="number" value={newSnackForm.price} name="price" onChange={handleFormChange} step="0.01"/></td></tr>
          <tr><td>      </td><td><input type="submit" value="Create Snack"/></td></tr>
        </tbody></table> 
      </form>
      <h3>Current Snacks</h3>
      <div className="vending-machine-card">
        <div className="grid">{snackCards}</div>
      </div>
    </div>
  )
}

export default ManageSnacks;
