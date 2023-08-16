import  React from 'react';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children?: React.ReactNode | React.ReactElement | JSX.Element
}

const Button = ({children , ...props} : ButtonProps) =>{
    return (
        <button {...props} >
            {children}
        </button>
    )
}
export default Button
