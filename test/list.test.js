import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import List from '../src/components/List';

describe('The List component', () => {
    afterEach(cleanup);

    it('should render successfully', () => {
        render(<List />);
    });

    it('should have class list', () => {
        const { container } = render(<List />);
        expect(container.firstChild).toHaveClass('list');
    });

    it('should render 144 buttons on screen', () => {
        render(<List />);
        expect(screen.getAllByTestId('number-button')).toHaveLength(144);
    });
});
