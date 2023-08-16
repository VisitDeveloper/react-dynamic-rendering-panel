import React from 'react'

interface H5Props extends React.HTMLProps<HTMLHRElement>{
    children ?: React.ReactElement | React.ReactNode | JSX.Element;
}

function H5({children , ...props} : H5Props) {
  return (
    <h5 {...props}>
        {children}
    </h5>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export default H5