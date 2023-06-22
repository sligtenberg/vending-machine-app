import React, { createContext, useState } from "react";

const VendingMachineContext = createContext();

function VendingMachineProvider({ children }) {
  const [allVendingMachines, setAllVendingMachines] = useState([])
  const [userVendingMachines, setUserVendingMachines] = useState([])

  return (
    <VendingMachineContext.Provider
      value={{ 
        all: [allVendingMachines, setAllVendingMachines],
        user: [userVendingMachines, setUserVendingMachines]
      }}>
      {children}
    </VendingMachineContext.Provider>
  )
}

export { VendingMachineContext, VendingMachineProvider }