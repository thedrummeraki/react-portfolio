import React from 'react';
import { RegularProject, ProjectWithVideo, z } from 'utils';
import { Link } from 'components';

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

  if (video) {
    const videoUrl = video.url;
    const video_patg_parts = videoUrl.split('.')
    const extension = video_patg_parts[video_patg_parts.length - 1];

    return (
      <video className={z`width 100%; height 100%; object-fit cover;`} controls loop poster={image}>
        <source src={videoUrl} type={`video/${extension}`} />
        <source src={videoUrl} type="video/mp4" />
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a
          web browser that
          <Link external to="https://videojs.com/html5-video-support/">supports HTML5 video</Link>
        </p>
      </video>
    );
  }

  return (
    <img src={image} alt={title} />
  )
}
