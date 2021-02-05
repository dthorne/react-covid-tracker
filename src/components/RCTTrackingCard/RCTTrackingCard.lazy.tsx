import React, { lazy, Suspense } from 'react';

const LazyRCTTrackingCard = lazy(() => import('./RCTTrackingCard'));

const RCTTrackingCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRCTTrackingCard {...props} />
  </Suspense>
);

export default RCTTrackingCard;
