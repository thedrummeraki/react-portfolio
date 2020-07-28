// @ts-ignore
import zaftig from 'zaftig';
import { useState } from 'react';

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

// Source: https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
export function hashCode(str: string) { // java String#hashCode
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

export function intToRGB(i: number){
  var c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}

export function useImageLoaded(url: string) {
  const [loaded, setLoaded] = useState(false);

  const imageLoader = new Image();
  imageLoader.src = url;
  imageLoader.onload = () => setLoaded(true);

  return loaded;
}

export * from './projects';
