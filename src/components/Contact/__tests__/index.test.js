import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('contact me section visible', () => {
    it('Contact me in h1 tag is visible', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    });

    it('contact me button reads submit', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('contactButton')).toHaveTextContent('Submit');
    })
})