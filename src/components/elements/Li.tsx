import React from 'react';

interface LiProps extends React.HTMLProps<HTMLLIElement> {
    children?: React.ReactNode | React.ReactElement | JSX.Element
}

function LI({children ,...props}: LiProps) {
    return (
      <li {...props}>
          {children}
      </li>
    )
  }
// eslint-disable-next-line react-refresh/only-export-components
export default LI
