import React from "react";

function Button({ name, isBeam = false, containerClass }) {
  return <button className={`btn ${containerClass}`}>{isBeam && (
    <span className="h-3 w-3 relative flex" >
        <span className="btn-ping" />
        <span className="btn-ping_dot" />
    </span>
  )}{name}</button>;
}

export default Button;
