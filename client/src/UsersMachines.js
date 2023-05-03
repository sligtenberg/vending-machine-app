import React, { useState, useEffect } from "react";

function UsersMachines({ user }) {
    const [userVendingMachines, setUserVendingMachines] = useState([])
    console.log(userVendingMachines)

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>UsersMachines</div>
    )
}

export default UsersMachines;