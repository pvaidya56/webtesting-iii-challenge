// Test away
import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test('renders without crashing', () => {
    render (<Dashboard />);
})

test('should match snapshot', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
})