import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
    text: string;
    onClick?: () => void;
    className?:string
    disabled?:boolean;
    

}

const Button:React.FC<ButtonProps> = ({text,onClick,disabled,className}) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>{text}</button>
  )
}

export default Button