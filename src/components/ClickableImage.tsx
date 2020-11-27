import React from 'react';
import { puffLoader } from 'anim';
import { IconOverlay } from './IconOverlay';
import { useHoverableImageRef, useImageLoaded, z } from 'utils';

interface Props {
  title: string;
  titleColor?: string;
  image: string;
  icon?: string;
  onClick(): any;
  selectable?: boolean;
  rounded?: boolean;
  divideBy?: number;
  width?: number|string;
  height?: number|string;
  description?: string;
}

export function ClickableImage(props: Props) {
  const selectableClass = props.selectable ? '' : 'user-select none';

  return (
    <div className={z`
      flex 1 0 ${toFlex(props.divideBy || 3)}%
      height ${props.height || 400}
      width ${props.width || 500}
      margin 3.5rem 5
      ${selectableClass}
    `}>
      <div className={z`
        display flex
        height 100%
        width 100%
        justify-content center
        align-items center
        ${!props.rounded && 'background #222'}
        color white
        user-select none
      `}>
        <ImageOrVideo {...props} />
      </div>
      <p className={z`display grid; font-weight bold; padding 0 1rem`}>
        <span className={props.titleColor && z`color ${props.titleColor}`}>
          {props.title}
        </span>
        {props.description && <small className={z`color #aaa`}>{props.description}</small>}
      </p>
    </div>
  );
}

function ImageOrVideo(props: Props) {
  const { title, image, icon, onClick, rounded } = props;
  const defaultOpacity = 0.8;
  const { imageRef, onHover, onLeave } = useHoverableImageRef(0.6, defaultOpacity);
  const imageLoaded = useImageLoaded(props.image);

  if (!imageLoaded) {
    return <img src={puffLoader} alt='loading...' />
  }

  return (
    <>
      <div onMouseEnter={onHover} onMouseLeave={onLeave} className={z`
        width 100%
        height 100%
        position relative
      `}>
        <img
          src={image}
          alt={title}
          ref={imageRef}
          className={z`
            ${!rounded && `width 100%`}
            height ${props.height}
            object-fit cover
            opacity ${defaultOpacity}
            transition all 0.5s ease
            ${rounded && 'border-radius 10000'}
          `}
        />
        <IconOverlay icon={icon} onClick={onClick} />
      </div>

    </>
  )
}

function toFlex(divideBy: number) {
  return Math.round((100 / divideBy) - 1);
}
