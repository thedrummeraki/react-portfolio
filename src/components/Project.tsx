import React from 'react';
import { RegularProject, ProjectWithVideo, useImageLoaded, z, useHoverableImageRef, getProjectId } from 'utils';
import { play as playIcon, view as viewIcon } from 'icons';
import { puffLoader } from 'anim';
import { useHistory } from 'react-router-dom';
import { IconOverlay } from './IconOverlay';

interface Props {
  project: ProjectWithVideo | RegularProject;
}

export function Project(props: Props)  {
  const {project} = props;

  return (
    <div className={z`flex 1 0 30%; height 400; width 500; margin 3.5rem 5; user-select none;`}>
      <div className={z`display flex; height 100%; width 100%; justify-content center; align-items center; background #222; color white`}>
        <ProjectImageOrVideo project={project} />
      </div>
      <p className={z`display grid; font-weight bold; padding 0 1rem`}>
        <span>{project.title} ({project.year})</span>
        <small className={z`color #aaa`}>{project.description}</small>
      </p>
    </div>
  );
}

function ProjectImageOrVideo(props: Props) {
  const history = useHistory();
  const {project: {title, image, video}} = props;
  const defaultOpacity = 0.8;
  const {imageRef, onHover, onLeave} = useHoverableImageRef(0.6, defaultOpacity);

  const projectIcon = video ? playIcon : viewIcon;
  const imageLoaded = useImageLoaded(props.project.image);

  const showProject = () => {
    const project = props.project;
    const projectId = getProjectId(project);

    history.push(`/view?project=${projectId}`);
  };

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
            height 400
            object-fit cover
            opacity ${defaultOpacity}
            transition all 0.5s ease
          `}
        />
        <IconOverlay icon={projectIcon} onClick={showProject} />
      </div>
      
    </>
  )
}
