import { useEffect } from "react/cjs/react.development";
import { useState } from "react";

const Tooltip = (props) => {
  const [mouseOn, setMouseOn] = useState(false);

  useEffect(() => {
    // console.log(mouseOn);
  }, [mouseOn]);

  const tooltip = mouseOn ? (
    <div className="tooltip-top">{props.message}</div>
  ) : null;
  return (
    <div
      className="tooltip-trigger"
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
    >
      {props.children}
      {tooltip}
    </div>
  );
};

export default Tooltip;
