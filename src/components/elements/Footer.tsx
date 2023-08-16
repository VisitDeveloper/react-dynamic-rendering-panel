import React from 'react';

interface FooterrProps extends React.HTMLProps<HTMLElement> {
    children?: React.ReactNode | React.ReactElement | JSX.Element
}

function Footer({children ,...props}: FooterrProps) {
    return (
      <footer {...props}>
          {children}
      </footer>
    )
  }
export default Footer
