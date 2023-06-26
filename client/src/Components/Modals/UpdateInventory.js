import React, { useRef, useState } from "react";
import ReactDom from "react-dom";

function UpdateInventory({ setShowUpdateInventory, inventory, updateInventory }) {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();

  const [newInventory, setNewInventory] = useState(inventory)

  // close the modal by clicking outside of it
  const closeUpdateInventory = (e) => {
    if (e.target === modalRef.current) {
      setShowUpdateInventory(false);
    }
  };

  function handleFormSubmit(e) {
    e.preventDefault()
    updateInventory(newInventory)
    setShowUpdateInventory(false)
  }

  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeUpdateInventory}>
      <form className="modal" onSubmit={handleFormSubmit}>
        <div>Vending Machine: {inventory.vending_machine_name}</div>
        <div>Snack: {inventory.name}</div>
        Quantity: <input
          type="number"
          value={newInventory.quantity}
          onChange={(e) => setNewInventory({...newInventory, quantity: e.target.value})}/><br/>
        <input type="submit"  />
      </form>
    </div>,
    document.getElementById("portal")
  );
};

export default UpdateInventory;