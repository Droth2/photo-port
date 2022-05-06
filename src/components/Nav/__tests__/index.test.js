import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mocksetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav 
            categories={categories}
            setCurrentCategory={mocksetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mocksetCurrentCategory}
            currentCategory={mockCurrentCategory}    
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('emoji is visable', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mocksetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
});

describe('links are visable', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mocksetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})