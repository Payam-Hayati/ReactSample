import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClose = () => {
    //console.log("Bingo");
    setActive(!active)
  };

  return (
    <>
      <div className={active ? "fas fa-times" : "fas fa-bars"}></div>
      <button onClick={handleClose}>Close</button>
    </>
  );
};

export default Navbar;
