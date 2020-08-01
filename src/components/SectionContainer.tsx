import React, { ReactNode } from 'react';
import { z } from 'utils';
import { Breadcrumb, Breadcrumbs } from 'components';

interface Props {
  children?: ReactNode;
  title?: string;
  breadcrumbs?: Breadcrumb[];
}

export function SectionContainer(props: Props) {
  const {title, children, breadcrumbs} = props;
  return (
    <section className={z`padding 170 0; color #fff`}>
      <div className={z`text-align center`}>
        {title && <h1 className={z`user-select none`}>{title}</h1>}
        {breadcrumbs && <Breadcrumbs crumbs={breadcrumbs} />}

        <article className={z`width 90vw; margin 0 auto`}>
          {children}
        </article>
      </div>
    </section>
  )
}
