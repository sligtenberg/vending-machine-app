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

    return (
        <div>
            <h2>Submit the form to create a new snack</h2>
            <form >
                <table>
                    <tbody>
                        <tr><td>Name:</td><td><input type="text"/></td></tr>
                        <tr><td>Price:</td><td><input type="number"/></td></tr>
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
