import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RCTTrackingCard from './RCTTrackingCard';

describe('<RCTTrackingCard />', () => {
  test('it should mount', () => {
    render(<RCTTrackingCard />);
    
    const rctTrackingCard = screen.getByTestId('RCTTrackingCard');

    expect(rctTrackingCard).toBeInTheDocument();
  });
});