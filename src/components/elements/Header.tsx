import React from 'react';

interface FooterrProps extends React.HTMLProps<HTMLElement> {
    children?: React.ReactNode | React.ReactElement | JSX.Element
}

function Header({children ,...props}: FooterrProps) {
    return (
      <header {...props}>
          {children}
      </header>
    )
  }
export default Header
