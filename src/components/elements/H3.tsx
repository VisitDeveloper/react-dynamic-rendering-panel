import React from 'react'

interface H3Props extends React.HTMLProps<HTMLHRElement>{
    children ?: React.ReactElement | React.ReactNode | JSX.Element;
}

function H3({children , ...props} : H3Props) {
  return (
    <h3 {...props}>
        {children}
    </h3>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export default H3