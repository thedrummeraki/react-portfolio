import React from 'react';
import { z } from 'utils';

interface Props {
  filledPercentage: number;
  errored?: boolean;
}

export function ProgressBar(props: Props) {
  const {filledPercentage, errored} = props;

  return (
    <div className={z`
      display flex
      width 100%
      margin 0 1.5em 0 0
      align-center center
      position relative
      touch-action none
    `}>
      <div className={z`
        display flex
        flex-grow 1
        flex-shrink 0
        width auto
        position relative
      `}>
        <div className={z`
          display flex
          width 100%
          height .3em
          background #ababab61
          position relative
          transition height .2s ease
          will-change height
          :hover { height .6em; cursor pointer }
        `}>
          <div className={z`
            flex 0
            flex-basis ${errored ? `100%` : `${filledPercentage}%`}
            width ${errored ? `0%` : `${filledPercentage}%`}
            background ${errored ? '#F26B7F' : '#6dccc0'}
            content '!'
          `}></div>
        </div>
      </div>
    </div>
  )
}
