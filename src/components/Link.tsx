import React from 'react';
import { LinkProps as ReactLinkProps, useHistory } from 'react-router-dom';
import * as H from 'history';

import { z } from 'utils';

type S = H.LocationState;
type LinkProps = React.PropsWithoutRef<ReactLinkProps<S>> & React.RefAttributes<HTMLAnchorElement>;
interface Props {
  external?: boolean;
  active?: boolean;
}

type ComposedProps = LinkProps & Props;

export function Link(props: ComposedProps) {
  const history = useHistory();
  const ourClassName = z`cursor pointer; ${props.active && 'border-bottom 1px solid; padding-bottom 4px'}`;
  const className = `${props.className || ''} ${ourClassName}`;

  const goToLink = (url: H.LocationDescriptor<S> | ((location: H.Location<S>) => H.LocationDescriptor<S>)) => {
    return () => {
      props.external ? window.open(url.toString(), '_blank') : history.push(url.toString())
    };
  }

  return (
    <span {...props} className={className} onClick={goToLink(props.to)}>
      {props.children}
    </span>
  )
}
