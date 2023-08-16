import React from 'react';

interface DivProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode  | React.ReactElement | JSX.Element
}

function Div({children ,...props}: DivProps) {
    return (
      <div {...props}>
          {children}
      </div>
    )
  }
export default Div
