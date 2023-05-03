import React from "react";

function Home({ setUser }) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => setUser(null));      
    }

    return (
        <div>HOME</div>
    );
}

export default Home;
