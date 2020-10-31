import React from 'react';
import {z} from 'utils';

interface Props {
  icon?: string;
  onClick?: () => any;
}

export function IconOverlay(props: Props) {
  const {onClick, icon} = props;
  return (
    <div className={z`
      position absolute
      top 0
      width 100%
      height 100%
      display flex
      place-content center
      cursor pointer
    `}
    onClick={onClick}>
      {icon && <img alt='select project' src={icon} className={z`width 50`} />}
    </div>
  )
}
