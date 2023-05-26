import React, { useState } from "react";

function NewSnackForm ({ viewPersonalMachines }) {
    const [newSnackMode, setNewSnackMode] = useState(false)


    return (
        newSnackMode ? 
            <td>
                <form>
                    <input type="text" placeholder="name"/><br/>
                    <input type="number" placeholder="price"/><br/>
                    <input type="submit" value="Create" />
                    <button onClick={() => setNewSnackMode(false)}>Cancel</button>
                </form>
                
            </td> :
            <td>{viewPersonalMachines ?
                <button onClick={() => setNewSnackMode(true)}>New Snack</button> : null }
            </td>
    )
}

export default NewSnackForm;
