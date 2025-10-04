import { NativeModule, requireNativeModule } from 'expo';

import { BluepeerModuleEvents } from './Bluepeer.types';

declare class BluepeerModule extends NativeModule<BluepeerModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<BluepeerModule>('Bluepeer');
