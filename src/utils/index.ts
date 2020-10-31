// @ts-ignore
import zaftig from 'zaftig';
import { useState, useRef, useEffect } from 'react';

zaftig``.__proto__.valueOf = function () {
  return this.className;
}

export const z = zaftig;

export function queryParam(key: string, defaultValue = '') {
  return new URLSearchParams(window.location.search).get(key) || defaultValue;
}

// Source: https://stackoverflow.com/questions/2519818/create-a-permalink-with-javascript
export function toPermalink(str: string) {
  return str.replace(/[^a-z0-9]+/gi, '-').replace(/^-*|-*$/g, '').toLowerCase();
}

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

export function useHoverableImageRef(hoverOpacity: number, defaultOpacity: number) {
  const imageRef = useRef<HTMLImageElement|null>(null);

  const onHover = () => {
    if (!imageRef.current) return;

    imageRef.current.style.opacity = hoverOpacity.toString();
    imageRef.current.style.filter = 'blur(2px)';
  }

  const onLeave = () => {
    if (!imageRef.current) return;

    imageRef.current.style.opacity = defaultOpacity.toString();
    imageRef.current.style.filter = 'none';
  }

  return {imageRef, onHover, onLeave};
}

export function useInterval(callback: () => any, delay: number) {
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  });
}

export * from './projects';
