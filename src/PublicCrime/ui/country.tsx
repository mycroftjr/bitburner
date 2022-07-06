import React, { useState } from "react";

interface IProps {
  name: string;
  path: JSX.Element;
}

export function Country(props: IProps): React.ReactElement {
  const [mouseIn, setMouseIn] = useState(false);
  const onClick = (): void => console.log(props.name);
  return (
    <g
      style={{ fill: mouseIn ? "#666" : "#FFF" }}
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
      onClick={onClick}
    >
      {props.path}
    </g>
  );
}
