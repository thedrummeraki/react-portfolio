import React from 'react';
import {Image} from 'bloomer';

export default function Gravatar(props) {
  const size = `${props.size}x${props.size}` || '64x64';
  const src = `https://www.gravatar.com/avatar/${props.hash}?s=${props.size}`;
  const classes = [];
  if (props.centered) {
    classes.push('container')
  }
  if (props.rounded) {
    classes.push('is-rounded');
  }

  return (
    <div style={{margin: '30px auto'}}>
      <Image
        isSize={size}
        src={src}
        className={classes} />
    </div>
  );
}
