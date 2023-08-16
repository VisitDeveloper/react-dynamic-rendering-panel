import React from 'react'

interface H1Props extends React.HTMLProps<HTMLHRElement>{
    children ?: React.ReactElement | React.ReactNode | JSX.Element;
}

function H1({children , ...props} : H1Props) {
  return (
    <h1 {...props}>
        {children}
    </h1>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export default H1