import React from 'react';
import { RegularProject, ProjectWithVideo, z } from 'utils';
import { play as playIcon, view as viewIcon } from 'icons';

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
        <span>{project.title}</span>
        <small className={z`color #aaa`}>{project.description}</small>
      </p>
    </div>
  );
}

function ProjectImageOrVideo(props: Props) {
  const {project: {title, image, video}} = props;
  const projectIcon = video ? playIcon : viewIcon;

  const showProject = () => {
    const project = props.project;
    console.log('showing project', project);
  };

  return (
    <>
      <div className={z`width 100%; height 100%; position relative`}>
        <img
          src={image}
          alt={title}
          className={z`
            width 100%
            height 400
            object-fit cover
          `}
        />
        <div className={z`
          position absolute
          top 0
          opacity 0
          width 100%
          height 100%
          display flex
          place-content center
          cursor pointer
          transition 0.5s ease
          :hover {
            opacity 1
          }
        `}
        onClick={showProject}>
          <img src={projectIcon} className={z`width 50`} />
        </div>
      </div>
      
    </>
  )
}
