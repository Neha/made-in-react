import React from 'react';

// <> or :
// ref type??

type InputProps = {
    placeholder: string,
    name: string,
    label: string,
    type: string,
    changeHandler: () => void
}

const Input =  React.forwardRef((props:InputProps, ref:any) => {
    return <input 
            data-testid="my-input" 
            placeholder={props.placeholder} 
            name={props.name} 
            ref={ref} 
            aria-label={props.label} 
            type={props.type} 
            onChange={props.changeHandler} />
});

export default Input;