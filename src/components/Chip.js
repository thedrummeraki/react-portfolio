import React from 'react';

export default function Chip(props) {
  const {text} = props;

  if (text) {
    return (
      <div className='chip'>
        {text}
      </div>
    );
  }
  return null;
}
