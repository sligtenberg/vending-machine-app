import React from "react";
import SnackCard from "./SnackCard";

function ManageSnacks({ allSnacks, setAllSnacks }) {
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
            body: JSON.stringify({
                name: event.target[0].value,
                price: event.target[1].value
            })
        }).then(response => {
            if (response.ok) {
                response.json().then(newSnack => setAllSnacks([...allSnacks, newSnack]));
            } else {
                response.json().then(console.log)
            }
        })
    }

    // delete a snack
    function handleDeleteSnack(snackToDeleteId) {
        fetch(`/snacks/${snackToDeleteId}`, {method: "DELETE"})
            .then(response => {
                if (response.ok) {
                    setAllSnacks(allSnacks.filter(snack => snack.id !== snackToDeleteId))
                }
            })
    }

    return (
        <div>
            <h3>Submit form to create a new snack</h3>
            <form onSubmit={event => handleFormSubmit(event)}>
                <table>
                    <tbody>
                        <tr><td>Name:</td><td><input type="text"/></td></tr>
                        <tr><td>Price:</td><td><input type="number" step="0.01"/></td></tr>
                        <tr><td></td><td><input type="submit" value="Create Snack"/></td></tr>
                    </tbody>
                </table> 
            </form>
            <h3>Current Snacks</h3>
            <div className="vending-machine-card">
                <div className="grid">{snackCards}</div>
            </div>
        </div>
    )
}

export default ManageSnacks;
