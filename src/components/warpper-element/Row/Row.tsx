import React from "react";
import { Div } from "../../_index";

interface RowProps {
    children?: React.ReactNode | React.ReactElement | JSX.Element
}

function Row({children} : RowProps) {
  return <Div className="grid grid-cols-12">
    {children}
  </Div>;
}
export default Row