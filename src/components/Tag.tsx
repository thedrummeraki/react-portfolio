import React, {ReactNode} from 'react';
import {z} from 'utils';
import { useHistory } from 'react-router-dom';

interface Props {
  children: ReactNode;
  colour?: string;
  url?: string | null;
}

export function Tag(props: Props) {
  const {url} = props;
  const history = useHistory();
  const colour = props.colour ? props.colour : '$muted-color';

  const onClick = () => {
    if (url) {
      history.push(url);
    }
  }

  return (
    <div
      onClick={onClick}
      className={z`
        display inline-block
        padding 5 10
        margin 4
        border 1 solid ${colour}
        br 8
        font-size 80%
        margin-right 0.5em
        background #222
        cursor ${url ? 'pointer' : 'default'}
      `}
    >
      {props.children}
    </div>
  );
}
