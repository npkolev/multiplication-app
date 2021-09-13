import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import App from '../src/App';

describe('The app component', () => {
    afterEach(cleanup);

    it('should render the App component successfully', () => {
        render(<App />);
    });
});
