import React, { useState, CSSProperties } from 'react';
import { ProjectWithVideo, RegularProject, queryParam, getProjectById, z, useImageLoaded } from 'utils';
import { SectionContainer, Link, IconOverlay, ProgressBar } from 'components';
import ReactPlayer from 'react-player'
import { puffLoader } from 'anim';
import { play, pause } from 'icons';

interface RegularProjectProps {
  project: RegularProject;
}

interface ProjectWithVideoProps {
  project: ProjectWithVideo;
}

const dimensions = 'width 100%; height 50vh';

export function ViewProject() {
  const project = getProjectById(queryParam('project'));

  if (!project) {
    return <ProjectNotFound />;
  }

  const projectMarkup = (project as ProjectWithVideo).video ?
    //<ViewProjectWithVideo project={project as ProjectWithVideo} /> :
    <ViewRegularProject project={project as RegularProject} /> :
    <ViewRegularProject project={project as RegularProject} />;
  
  return (
    <SectionContainer title={project.title}>
      {projectMarkup}
    </SectionContainer>
  )
}

function ProjectNotFound() {
  return (
    <SectionContainer title='404 not found'>
      <p className={z`> span { color grey; :hover { color #aaa } }`}>
        I'm sorry but this project does not exist! You
        can <Link to='/'>go back home</Link> or <Link to='/projects'>view all projects</Link>.
      </p>
    </SectionContainer>
  )
}

function ViewRegularProject(props: RegularProjectProps) {
  const {project} = props;
  const imageLoaded = useImageLoaded(project.image);

  return (
    <ProjectMarkup project={project} loaded={imageLoaded} />
  )
}

function ViewProjectWithVideo(props: ProjectWithVideoProps) {
  const {project} = props;

  return (
    <>
      Project
    </>
  )
}

function ProjectMarkup(props: {project: ProjectWithVideo | RegularProject, loaded: boolean}) {
  const {project, loaded} = props;

  function DemoMarkup() {
    if (project.video) {      
      return <DemoVideo project={project as ProjectWithVideo} />
    }

    return <DemoImage project={project} />
  }

  return (
    <div className={z`display grid`}>
      <span className={z`font-weight bold; margin-bottom 10`}>{project.description}</span>

      <div className={z`display flex; padding 1rem`}>
        <div className={z`width 70%`}>
          {loaded ? <DemoMarkup /> : <DemoLoading />}
        </div>
        <div className={z`width 30%; padding 5 50`}>
          <div className={z`display grid`}>
            <small>{project.text}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoLoading(props: {style?: CSSProperties}) {
  return (
    <div style={props.style} className={z`${dimensions}; border 1px solid #222; background #111`}>
      <div className={z`display flex; place-content center; height 100%`}>
        <img alt='loading...' src={puffLoader} />
      </div>
    </div>
  );
}

function DemoVideo(props: {project: ProjectWithVideo}) {
  const {project} = props;

  const [playing, setPlaying] = useState(false);
  const [errored, setErrored] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const videoDisplay = videoReady ? 'inherit' : 'none';
  const loadingDisplay = videoReady ? 'none' : 'inherit';
  const overlayIcon = playing ? pause : play;
  
  const onVideoProgress = (state: { played: number, playedSeconds: number, loaded: number, loadedSeconds: number }) => {
    const {played} = state;

    setProgress(played);
  }

  const className = playing ?
    `opacity 1` :
    `opacity 0.4`;

  return (
    <div
      onClick={() => setPlaying(!playing)}
    >
      <DemoLoading style={{display: loadingDisplay}} />
      <div className={z`width 100%; height 100%; position relative`}>
        {!playing && <IconOverlay icon={overlayIcon} />}
        <div
          className={z`
            cursor pointer
            transition opacity 0.5s ease
            border 1px solid #222
            background #111
            ${className}
          `}>
          <ProgressBar filledPercentage={progress * 100} />
          <ReactPlayer
            playing={playing}
            style={{display: videoDisplay}}
            width='100%'
            height='50vh'
            url={project.video.url}
            onProgress={onVideoProgress}
            onError={(error) => {
              console.error(error);
              setErrored(true);
            }}
            onReady={() => setVideoReady(true)} />
        </div>
      </div>
    </div>
  )
}

function DemoImage(props: {project: RegularProject}) {
  const {project} = props;

  return (
    <img
      src={project.image}
      alt={project.title}
      className={z`${dimensions}; object-fit cover`}
    />
  );
}
