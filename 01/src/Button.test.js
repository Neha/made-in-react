import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe("<Button/> component", () => {
    test("<Button/> should render",() => {
        render(<Button />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument()
    });
    test("<Button/> should have label", () => {
        render(<Button>click here</Button>);
        const buttonElement = screen.getByText('click here');
        expect(buttonElement).toBeInTheDocument();
    });
    // test("<Button/> should have onClick event", () => {
    //     const handleClick = jest.fn();
    //     render(<Button data-testid="my-button" onClick={handleClick}>click here</Button>);
    //     const buttonElement = screen.getByTestId('my-button');
    //     fireEvent.click(buttonElement);
    //     expect(handleClick).toHaveBeenCalledTimes(1);
    // });
})