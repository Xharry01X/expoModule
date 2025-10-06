import * as React from 'react';

import { BluepeerViewProps } from './Bluepeer.types';

export default function BluepeerView(props: BluepeerViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
