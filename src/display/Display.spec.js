// Test away!

import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('renders without crashing', () => {
    render (<Display />);
})

test('should match snapshot', () => {
    expect(render(<Display />)).toMatchSnapshot();
})