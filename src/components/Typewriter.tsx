import React, { useState, useReducer } from 'react';
import { z } from 'utils';

interface Props {
  prefix?: string;
  sentences: string[];
  suffix?: string;
  refreshSpeed: number;
  className?: string;
}

function reducerFor(sentences: string[]) {
  return (index: number, action: string) => {
    const resolvedIndex = action === 'run' ? index : index + 1;
    const newIndex = resolvedIndex % sentences.length;
    console.log(index, resolvedIndex, newIndex);
    return sentences[newIndex];
  }
}

export function Typewriter(props: Props) {
  const {prefix, sentences, suffix, refreshSpeed} = props;


  return (
    <div className={props.className}>
      <span className={z`
        overflow hidden
        border-right .15em solid orange
        white-space nowrap
        margin 0 auto

      `}>
        {prefix}

      </span>
      <span>{suffix}</span>
    </div>
  )
}
