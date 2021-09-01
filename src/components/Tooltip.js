import { useState } from "react";

const Tooltip = (props) => {
  const [mouseOn, setMouseOn] = useState(false);

  const tooltip = mouseOn ? (
    props.position === "bottom" ? (
      <div className="tooltip-bottom">{props.message}</div>
    ) : (
      <div className="tooltip-top">{props.message}</div>
    )
  ) : null;

  return (
    <div
      className="tooltip-trigger"
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => {
        setMouseOn(false);
      }}
    >
      {props.children}
      {tooltip}
    </div>
  );
};

export default Tooltip;
