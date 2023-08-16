import React from 'react'

interface H4Props extends React.HTMLProps<HTMLHRElement>{
    children ?: React.ReactElement | React.ReactNode | JSX.Element;
}

function H4({children , ...props} : H4Props) {
  return (
    <h4 {...props}>
        {children}
    </h4>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export default H4