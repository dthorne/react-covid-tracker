import React, { lazy, Suspense } from 'react';

const LazyRCTCardList = lazy(() => import('./RCTCardList'));

const RCTCardList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRCTCardList {...props} />
  </Suspense>
);

export default RCTCardList;
