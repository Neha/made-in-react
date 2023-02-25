import React from 'react';

type ButtonProps = {
    buttonLabel: string,
    clickHandler: () => void;
}

const Button = (props:ButtonProps) => {
    return <button 
             onClick={props.clickHandler}
             data-testid="my-button">
            { props.buttonLabel}
            </button>
}

export default Button;