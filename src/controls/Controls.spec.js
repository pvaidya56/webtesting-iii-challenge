// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Controls from './Controls';

test('renders without crashing', () => {
    render (<Controls />);
})

test('should match snapshot', () => {
    expect(render(<Controls />)).toMatchSnapshot();
})