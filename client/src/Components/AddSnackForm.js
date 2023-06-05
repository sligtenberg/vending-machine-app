import React from "react";

function AddSnackForm({ allSnacks, vendingMachines }) {

    // create a new inventory
    function handleFormSubmit(event) {
        event.preventDefault()
        console.log(event.target[0].value)
        console.log(event.target[1].value)
        console.log(event.target[2].value)

        fetch("/inventories", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                vending_machine_id: event.target[0].value,
                snack_id: event.target[1].value,
                quantity: event.target[2].value
            })
        }).then(response => {
            if (response.ok) {
                // response.json().then(newSnack => setAllSnacks([...allSnacks, newSnack]));
            } else {
                response.json().then(console.log)
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