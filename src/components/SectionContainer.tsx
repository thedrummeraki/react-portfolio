import React, { ReactNode } from 'react';
import { z } from 'utils';

interface Props {
  children?: ReactNode;
  title?: string;
}

export function SectionContainer(props: Props) {
  const {title, children} = props;
  return (
    <section className={z`padding 170 0; color #fff`}>
      <div className={z`text-align center`}>
        {title && <h1 className={z`user-select none`}>{title}</h1>}

        <article className={z`width 90vw; margin 0 auto`}>
          {children}
        </article>
      </div>
    </section>
  )
}
