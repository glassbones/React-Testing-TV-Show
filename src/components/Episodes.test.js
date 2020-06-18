import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';

const mockData = {
    name: 'name',
    summary: '<p>Summary</p>',
    image: { medium: 'medium_image' },
    id: '123',
    season: 3,
    number: 2,
    runtime: 20,
};

test('Renders Episodes without props, and again with props', () => {
    const { queryAllByText, rerender } = render(<Episodes episodes={[]} />);
    expect(queryAllByText(/season/i) === null);
    rerender(<Episodes episodes={[mockData]} />);
    expect(queryAllByText(/name/i)).toHaveLength(1);
});