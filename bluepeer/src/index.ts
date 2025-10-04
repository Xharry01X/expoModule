import { EventEmitter } from 'expo';
import BluepeerModule from './BluepeerModule';

const emitter: any = new EventEmitter(BluepeerModule);

export type ThemeChangeEvent = {
  theme: string;
};

export function addThemeListener(listener: (event: ThemeChangeEvent) => void): any {
  return emitter.addListener('onChangeTheme', listener);
}

export function getTheme(): string {
  return BluepeerModule.getTheme();
}

export function setTheme(theme: string): void {
  BluepeerModule.setTheme(theme);
}
