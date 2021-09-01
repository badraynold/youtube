import { useState } from "react";

const Tooltip = (props) => {
  const [mouseOn, setMouseOn] = useState(false);

  let tooltip = null;
  console.log(props.position);
  if (mouseOn) {
    switch (props.position) {
      case "bottom":
        tooltip = <div className="tooltip-bottom">{props.message}</div>;
        break;
      case "top-left":
        tooltip = <div className="tooltip-top-left">{props.message}</div>;
        break;
      case "top-right":
        tooltip = <div className="tooltip-top-right">{props.message}</div>;
        break;

      default:
        tooltip = <div className="tooltip-top">{props.message}</div>;
        break;
    }
  }

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
