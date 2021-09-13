import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import ListItem from '../src/components/ListItem';

describe('The ListItem component', () => {
    afterEach(cleanup);

    it('should render successfully', () => {
        const selectedNumber = jest.fn();
        render(
            <ListItem key={4} selectedNumber={selectedNumber} multiple={false}>
                4
            </ListItem>
        );
    });

    it('should be highlighted', () => {
        const selectedNumber = jest.fn();
        render(
            <ListItem key={144} selectedNumber={selectedNumber} multiple={true}>
                144
            </ListItem>
        );
        screen.getByText(144);
        expect(screen.getByText(144)).toHaveClass('active-number-btn');
    });

    it('should not be highlighted', () => {
        const selectedNumber = jest.fn();
        render(
            <ListItem key={30} selectedNumber={selectedNumber} multiple={false}>
                30
            </ListItem>
        );
        screen.getByText(30);
        expect(screen.getByText(30)).toHaveClass('number-btn');
    });

    it('should have the correct aria-label text', () => {
        const selectedNumber = jest.fn();
        render(
            <ListItem key={5} selectedNumber={selectedNumber} multiple={false}>
                5
            </ListItem>
        );
        expect(screen.findByLabelText('click the button to get the multiple numbers of 5')).toBeTruthy();
    });

    it('should have the selectedNumber method called once', () => {
        const selectedNumber = jest.fn();
        render(
            <ListItem key={5} selectedNumber={selectedNumber} multiple={false}>
                5
            </ListItem>
        );
        fireEvent.click(screen.getByText(/5/i));
        expect(selectedNumber).toHaveBeenCalledTimes(1);
    });
});
