import React from 'react';
import { puffLoader } from 'anim';
import { IconOverlay } from './IconOverlay';
import { useHoverableImageRef, useImageLoaded, z } from 'utils';

interface Props {
  title: string;
  image: string;
  icon?: string;
  onClick(): any;
  flex?: number;
  width?: number;
  height?: number;
  description?: string;
}

export function ClickableImage(props: Props) {
  return (
    <div className={z`flex 1 0 ${props.flex || 30}%; height ${props.height || 400}; width ${props.width || 500}; margin 3.5rem 5; user-select none;`}>
      <div className={z`display flex; height 100%; width 100%; justify-content center; align-items center; background #222; color white`}>
        <ImageOrVideo {...props} />
      </div>
      <p className={z`display grid; font-weight bold; padding 0 1rem`}>
        <span>{props.title}</span>
        {props.description && <small className={z`color #aaa`}>{props.description}</small>}
      </p>
    </div>
  );
}

function ImageOrVideo(props: Props) {
  const { title, image, icon, onClick } = props;
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
            width 100%
            height ${props.height}
            object-fit cover
            opacity ${defaultOpacity}
            transition all 0.5s ease
          `}
        />
        <IconOverlay icon={icon} onClick={onClick} />
      </div>

    </>
  )
}
