// @ts-ignore
import zaftig from 'zaftig';

zaftig``.__proto__.valueOf = function () {
  return this.className;
}

export const z = zaftig;

export const shuffled = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
