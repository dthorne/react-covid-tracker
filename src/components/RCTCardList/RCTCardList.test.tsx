import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RCTCardList from './RCTCardList';

describe('<RCTCardList />', () => {
  test('it should mount', () => {
    render(<RCTCardList />);
    
    const rctCardList = screen.getByTestId('RCTCardList');

    expect(rctCardList).toBeInTheDocument();
  });
});