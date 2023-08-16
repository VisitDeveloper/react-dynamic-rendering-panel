import React from 'react';

interface ULProps extends React.HTMLProps<HTMLUListElement> {
    children?: React.ReactNode | React.ReactElement | JSX.Element
}

function UL({children ,...props}: ULProps) {
    return (
      <ul {...props}>
          {children}
      </ul>
    )
  }
// eslint-disable-next-line react-refresh/only-export-components
export default UL
