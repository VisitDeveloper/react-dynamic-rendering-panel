import React from 'react'

interface H2Props extends React.HTMLProps<HTMLHRElement>{
    children ?: React.ReactElement | React.ReactNode | JSX.Element;
}

function H2({children , ...props} : H2Props) {
  return (
    <h2 {...props}>
        {children}
    </h2>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export default H2