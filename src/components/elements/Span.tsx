import React from 'react';

interface SpanProps extends React.HTMLProps<HTMLSpanElement> {
    children?: React.ReactNode | React.ReactElement | JSX.Element
}

function Span({children ,...props}: SpanProps) {
    return (
      <span {...props}>
          {children}
      </span>
    )
  }
export default Span
