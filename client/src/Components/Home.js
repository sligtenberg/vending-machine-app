import React, { useContext } from "react";
import { UserContext } from "../Context/user";

function Home () {
  const { user } = useContext(UserContext)
  
  return (
    <h2>{`Welcome, ${user.username}!`}</h2>
  )
}

export default Home;
