/* eslint-disable react-refresh/only-export-components */
import React  from 'react'


export enum ListDesignEnum  {
  start = 'start' ,
  end = 'end' ,
  center = 'center'
}
export interface ConfigWrapperListProps {
  isRow?:boolean;
  children: React.ReactNode | React.ReactElement | JSX.Element;
  className?: string;
  typeLayoutList?: ListDesignEnum;
}

function WrapperList(props : ConfigWrapperListProps) {
  const {className , typeLayoutList = ListDesignEnum.start} = props;

  const getStatusDesingList = (type : ListDesignEnum) =>{
    switch(type){
      case ListDesignEnum.start: 
        return `items`;
      case ListDesignEnum.end :
        return ``;
      case ListDesignEnum.center : 
        return ``;
      default : 
        return ``
    }
  }

  return props.isRow ? (
    <div className={`flex flex-row ${getStatusDesingList(typeLayoutList)} ${className}`}>
      {props.children}
    </div> 
  ) : (
    <div className={`flex flex-col ${className}`}>
      {props.children}
    </div> 
  )
}
export default WrapperList