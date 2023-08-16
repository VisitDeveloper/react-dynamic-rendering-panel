import React from 'react'

interface ParagraphProps extends React.HTMLProps<HTMLParagraphElement>{
  children?: React.ReactElement | React.ReactNode | JSX.Element
}

function P({children , ...props} : ParagraphProps) {
  return (
    <p {...props}>
      {children}
    </p>
  )
}
export default P