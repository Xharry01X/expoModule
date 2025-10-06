import { registerWebModule, NativeModule } from 'expo';

import { BluepeerModuleEvents } from './Bluepeer.types';

class BluepeerModule extends NativeModule<BluepeerModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(BluepeerModule, 'BluepeerModule');
