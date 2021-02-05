import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RCTHeader from './RCTHeader';

describe('<RCTHeader />', () => {
  test('it should mount', () => {
    render(<RCTHeader />);
    
    const rctHeader = screen.getByTestId('RCTHeader');

    expect(rctHeader).toBeInTheDocument();
  });
});