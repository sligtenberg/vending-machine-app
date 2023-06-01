import React, { useEffect, useState } from "react";
import SnackCard from "./SnackCard";

function CreateNewSnack() {
    const [snacks, setSnacks] = useState([])
    const snackCards = snacks.map(snack => <SnackCard className="snack-card" key={snack.id} snack={snack}/>)

    useEffect(() => {
        fetch("/snacks").then(response => {
            if (response.ok) {
                response.json().then(setSnacks);
            } else {
                response.json().then(console.log)
            }
        })
    }, []);

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
                response.json().then(newSnack => setSnacks([...snacks, newSnack]));
            } else {
                response.json().then(console.log)
            }
        })
    }

    return (
        <div>
            <h2>Submit the form to create a new snack</h2>
            <form onSubmit={event => handleFormSubmit(event)}>
                <table>
                    <tbody>
                        <tr><td>Name:</td><td><input type="text"/></td></tr>
                        <tr><td>Price:</td><td><input type="number" step="0.01"/></td></tr>
                        <tr><td></td><td><input type="submit" value="Create Snack"/></td></tr>
                    </tbody>
                </table> 
            </form>
            <div className="vending-machine-card">
                <h2>Current Snacks</h2>
                <div className="grid">{snackCards}</div>
            </div>
        </div>
    )
}

export default CreateNewSnack;
