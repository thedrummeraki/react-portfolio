import React from 'react';
import { z } from 'utils';
import { Link } from 'components';

export interface Breadcrumb {
  text: string;
  url: string;
  active?: boolean;
}

interface Props {
  crumbs: Breadcrumb[];
}

export function Breadcrumbs(props: Props) {
  const {crumbs} = props;

  return (
    <div className={z`
      display inline-block
      font-size 14px
      line-height 1em
      border-radius 2px
      overflow hidden
      margin 1rem
      user-select none
    `}>
      <ul className={z`
        display flex
        flex-direction row-reverse
        list-style none
        margin 0
        padding 0
      `}>
        {crumbs.map(crumb => <Crumb key={crumb.url} crumb={crumb} />)}
      </ul>
    </div>
  );
}

function Crumb(props: {crumb: Breadcrumb}) {
  const {crumb} = props;
  const activeClassName = `
    background-color #ababab
    color #000
    pointer-events none
  `;

  return (
    <li className={z`
      display inline-block
      font-family sans-serif
      font-size 0.9em
      font-weight 600
      padding 12px 30px 12px 45px
      margin-left -20px
      color white
      background-color #6dccc0
      text-decoration none
      text-transform uppercase
      border-radius 0 100px 100px 0
      box-shadow 0 0 20px rgba(0, 0, 0, 0.4)
      ${crumb.active && activeClassName}
    `}>
      <Link to={crumb.url}>{crumb.text}</Link>
    </li>
  )
}
