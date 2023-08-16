import React from 'react'

interface ColProps {
    children?: React.ReactNode | React.ReactElement | JSX.Element;
    colSpan: number ;
  }

export default function Col(props :ColProps) {
    const {children , colSpan }= props

    const getfindColSpan = (colSpan: number) =>
      colSpan === 1
      ? "col-span-1"
      : colSpan === 2
      ? "col-span-2"
      : colSpan === 3
      ? "col-span-3"
      : colSpan === 4
      ? "col-span-4"
      : colSpan === 5
      ? "col-span-5"
      : colSpan === 6
      ? "col-span-6"
      : colSpan === 7
      ? "col-span-7"
      : colSpan === 8
      ? "col-span-8"
      : colSpan === 9
      ? "col-span-9"
      : colSpan === 10
      ? "col-span-10"
      : colSpan === 11
      ? "col-span-11"
      : "col-span-12";


      const getMdColSpan = (colSpan: number) =>
      colSpan === 1
      ? "md:col-span-1"
      : colSpan === 2
      ? "md:col-span-2"
      : colSpan === 3
      ? "md:col-span-3"
      : colSpan === 4
      ? "md:col-span-4"
      : colSpan === 5
      ? "md:col-span-5"
      : colSpan === 6
      ? "md:col-span-6"
      : colSpan === 7
      ? "md:col-span-7"
      : colSpan === 8
      ? "md:col-span-8"
      : colSpan === 9
      ? "md:col-span-9"
      : colSpan === 10
      ? "md:col-span-10"
      : colSpan === 11
      ? "md:col-span-11"
      : "md:col-span-12";

      

  return (
    <div className={`${getfindColSpan(colSpan)} ${getMdColSpan(colSpan)}`}>
        {children}
    </div>
  )
}
