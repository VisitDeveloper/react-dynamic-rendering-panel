import React from 'react'

export interface ConfigListProps {
    children?: React.ReactNode | React.ReactElement
}

 function ListItem(props:ConfigListProps) {
  return props.children
}
export default ListItem