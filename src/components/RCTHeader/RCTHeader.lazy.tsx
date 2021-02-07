import React, { lazy, Suspense } from 'react';

const LazyRCTHeader = lazy(() => import('./RCTHeader'));

const RCTHeader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRCTHeader {...props} />
  </Suspense>
);

export default RCTHeader;
