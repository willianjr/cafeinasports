import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?:string
}


export const Input: React.FC<InputProps> = ({label, type, ...rest}) => {
  return (
    <Container>
      <label>{label}</label>
      <input type={type} {...rest}/>
    </Container>
      
    
  )
}

