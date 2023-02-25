import React from 'react';

type LabelProps = {
    label: string,
    forhtml: string,
    id?: string
}
const Label = (props:LabelProps) => {
    return <label 
             htmlFor={props.forhtml} 
             id={props.id}>
            {props.label}
           </label>
}

export default Label;
