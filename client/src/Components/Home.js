import React, { useContext } from "react";
import { UserContext } from "../Context/user";

function Home () {
  const { user } = useContext(UserContext)
  
  return (
    <div>
      <h2>{`Hi, ${user.username}!`}</h2>
      Welcome to Stevo's Vending Machine App. Get ready to fulfill your wildest vending machine dreams! Use the navigation bar at the top of the screen to get around. This is the "Home" page. On the "Shop" page, you can see all the vending machines and their snacks. Try purchasing a snack! When you are ready to create your own vending machine, head to the "Manage Vending Machines" page. Start by creating a vending machine. All it needs is a name. Then, use the dropdown forms to add snacks! Don't see the snack you want to add? Go to the "Manage Snacks" page. There, you can create new snacks. Happy vending!
    </div>
  )
}

export default Home;
