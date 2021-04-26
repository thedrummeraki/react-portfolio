import React, { ReactNode } from "react";
import { z } from "utils";
import { Breadcrumb, Breadcrumbs } from "components";

interface Props {
  children?: ReactNode;
  title?: string;
  breadcrumbs?: Breadcrumb[];
  internal?: boolean;
}

export function SectionContainer(props: Props) {
  const { title, children, breadcrumbs, internal } = props;
  const padding = internal ? "padding-bottom 170" : "padding 170 0";
  return (
    <section className={z`${padding}; color #fff`}>
      <div className={z`text-align center`}>
        {title && <h1 className={z`user-select none`}>{title}</h1>}
        {breadcrumbs && <Breadcrumbs crumbs={breadcrumbs} />}

        <article className={z`width 90vw; margin 0 auto`}>{children}</article>
      </div>
    </section>
  );
}
