import React from 'react'

interface H6Props extends React.HTMLProps<HTMLHRElement>{
    children ?: React.ReactElement | React.ReactNode | JSX.Element;
}

function H6({children , ...props} : H6Props) {
  return (
    <h6 {...props}>
        {children}
    </h6>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export default H6