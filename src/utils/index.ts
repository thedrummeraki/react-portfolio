// @ts-ignore
import zaftig from 'zaftig';

zaftig``.__proto__.valueOf = function () {
  return this.className;
}

export const z = zaftig;

