import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

describe("<Input/> component", () => {
    test("<Input/> should render",() => {
        render(<Input />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument()
    });
    test("<Input/> should have label", () => {
        render(<Input placeholder="this is placeholder"/>);
        const inputElement = screen.getByPlaceholderText('this is placeholder');
        expect(inputElement).toBeInTheDocument();
    });
    test("<Input/> should have for", () => {
        render(<Input data-testid="my-input"  name="fullname" />);
        const inputElement = screen.getByTestId('my-input');
        expect(inputElement).toHaveAttribute('name', 'fullname');
    });
    test("<Input/> should have type", () => {
        render(<Input data-testid="my-input" type="text" />);
        const inputElement = screen.getByTestId('my-input');
        expect(inputElement).toHaveAttribute('type', 'text');
    });
    test("<Input/> should have aria-label", () => {
        render(<Input data-testid="my-input" label="Enter your name"/>);
        const inputElement = screen.getByLabelText('Enter your name');
        expect(inputElement).toHaveAttribute('aria-label', 'Enter your name');
    });
    // test("<Input/> should have onchange event", () => {
    //     const handleChange = jest.fn();
    //     render(<Input data-testid="my-input" onChange={handleChange}/>);
    //     const inputElement = screen.getByTestId('my-input');
    //     fireEvent.change(inputElement, { target: { value: 'test' } });
    //     expect(handleChange).toHaveBeenCalled();
    //     expect(handleChange).toHaveBeenCalledWith('test');
    // });
})