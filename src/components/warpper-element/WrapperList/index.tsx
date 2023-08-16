import React  from 'react'

export interface ConfigWrapperListProps {
  isRow?:boolean;
  children: React.ReactNode | React.ReactElement | JSX.Element;
  className?: string
}

function WrapperList(props : ConfigWrapperListProps) {
  const {className} = props

  return props.isRow ? (
    <div className={`flex flex-row ${className}`}>
      {props.children}
    </div> 
  ) : (
    <div className={`flex flex-col ${className}`}>
      {props.children}
    </div> 
  )
}
export default WrapperList