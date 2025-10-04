import { requireNativeView } from 'expo';
import * as React from 'react';

import { BluepeerViewProps } from './Bluepeer.types';

const NativeView: React.ComponentType<BluepeerViewProps> =
  requireNativeView('Bluepeer');

export default function BluepeerView(props: BluepeerViewProps) {
  return <NativeView {...props} />;
}
