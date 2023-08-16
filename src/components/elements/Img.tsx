import React from 'react'

interface ImageProps extends React.HTMLProps<HTMLImageElement>{}

const Img = ({...props} :  ImageProps) => {
    return (
        <img
           {...props}
        />
    )
}
export default Img
