'use client';
import { Provider } from 'react-redux';
import React, { JSX } from 'react';
import { store } from './store';

interface ProvidersProps {
  children: React.ReactNode | React.ReactElement | JSX.Element;
}

export function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}
