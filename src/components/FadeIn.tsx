import React, { DetailedHTMLProps } from 'react';
import { z } from 'utils';

type DivProps = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
interface Props extends DivProps {
  fadeIn: number;
  targetOpacity?: number;
}

export function FadeIn(props: Props) {
  const htmlProps: DivProps = props as DivProps;
  const {fadeIn, targetOpacity} = props;

  const fadeInStyle = z.anim`
    0% { opacity 0 }
    100% { opacity ${targetOpacity} }
  `;

  const animationClassName = z`
    animation ${fadeInStyle} ${fadeIn}s ease
    ${targetOpacity && `opacity ${targetOpacity}`}
  `;
  const className = `${htmlProps.className || ''} ${animationClassName}`;

  return (
    <div
      {...htmlProps}
      className={className}
    >
      {htmlProps.children}
    </div>
  )
}
