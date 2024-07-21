import React from 'react'


interface InputProps{
    type: string,
    name: string,
    id:string;
    placeholder: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    className?: string;
    required?: boolean;
    disabled?: boolean; 
    autoComplete?: string;
    autoFocus?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    title?: string;
    step?: number;
    min?: number;
    max?: number;
    defaultValue?: string;
    readOnly?: boolean;
    size?: string;
    rows?: number;
    cols?: number;
    list?: string;
    multiple?: boolean;
    spellCheck?: boolean;
    form?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    formEncType?: string;
    
}

const InputComponent:InputProps = ({type,name,id}) => {
  return (
    <input type="" />
  )
}

export default InputComponent