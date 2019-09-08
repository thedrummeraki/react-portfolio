import React from 'react';

export default function Chip(props) {
  const {text} = props;
  const colorHex = props.color || props.colour || 'e4e4e4';
  const color = colorHex.startsWith('#') ? colorHex : `#${colorHex}`;

  if (text) {
    const pin = props.color || props.colour ? (
      <div style={{backgroundColor: color}} className='pin'></div>)
    : null;
    return (
      <div className='chip'>
        {pin}    
        {text}
      </div>
    );
  }
  return null;
}
