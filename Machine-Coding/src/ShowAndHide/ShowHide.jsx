import React, { useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState("");
  function toggleClicks() {
    setShow((show) => !show);
  }
  return (
    <div>
      <button onClick={toggleClicks}>Show/Hide</button>
      {show ? <p>Lorem ipsum dolor sit amet.</p> : null}
    </div>
  );
};

export default ShowHide;
