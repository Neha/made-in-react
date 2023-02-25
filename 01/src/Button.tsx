import React from 'react';

type ButtonProps = {
    buttonLabel: string,
    clickHandler(e:React.SyntheticEvent):void;
}

const Button = ({ buttonLabel, clickHandler }:ButtonProps) => {
    return <button 
             onClick={clickHandler}
             data-testid="my-button">
            { buttonLabel}
            </button>
}

export default Button;