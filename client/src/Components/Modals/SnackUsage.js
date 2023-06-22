import React, { useRef } from "react";
import ReactDom from "react-dom";

function SnackUsage({ setShowSnackUsage, snackName, vendingMachines }) {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeSnackUsage = (e) => {
    if (e.target === modalRef.current) {
      setShowSnackUsage(false);
    }
  };

  const vendingMachineList = vendingMachines.map(vendingMachine => <li key={vendingMachine.id}>{vendingMachine.name}</li>)

  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeSnackUsage}>
      <div className="modal">
        <h4>{`${snackName} is sold by:`}</h4>
        <ul>{vendingMachineList}</ul>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default SnackUsage