import React, { useCallback, useRef, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardHeaderTitle,
  CardHeaderIcon,
  Subtitle,
  Content,
  CardImage,
  Image,
  Columns,
  Column
} from 'bloomer';
import ReactTooltip from 'react-tooltip';
import {github, open_in_new, google_play, share} from '../icons';
import Link from './Link';
import Chip from './Chip';
import {useTranslation as i18n} from 'react-i18next';

export default function Project(props) {
  const {
    title,
    githubPath,
    src,
    googlePlaySrc,
    image,
    video,
    description,
    text,
    technologies,
    hidden
  } = props;
  const {t} = i18n();

  const copyProjectLinkRef = useRef(null);
  const projectTitleRef = useRef(null);
  const videoRef = useRef(null);

  const [videoPlaying, setVideoPlaying] = useState(false);

  const project_id_parts = toPermalink(title).split('-');
  const project_id = project_id_parts.slice(0, project_id_parts.length-1).join('-');

  const githubIcon = githubPath ? (
    <Link newTab href={`https://github.com/${githubPath}`}>
      <CardHeaderIcon>
        <img src={github} alt='github link' className='icon' />
      </CardHeaderIcon>
    </Link>
  ) : null;
  
  const openInNewIcon = src ? (
    <Link newTab className="card-header-icon" href={`${src}?utm_source=jibun`}>
      <img src={open_in_new} alt='open in new tab' className='icon' />
    </Link>
  ) : null;

  const googlePlay = googlePlaySrc ? (
    <Link newTab className="card-header-icon" href={googlePlaySrc}>
      <img src={google_play} alt='open in new tab' className='icon' />
    </Link>
  ) : null;

  const shareFcn = useCallback((e) => {
    e.preventDefault();

    const currentDomain = window.location.host;
    const projectLink = `${currentDomain}/resume#${project_id}`;

    copyToClipboard(projectLink);
    projectTitleRef.current.innerHTML = t('misc.copied');
    projectTitleRef.current.classList.add('has-text-primary');

    setTimeout(() => {
      projectTitleRef.current.innerHTML = t(title);
      projectTitleRef.current.classList.remove('has-text-primary');
    }, 2000);
  }, []);

  const projectVideoOrImage = image || video ? (
    <CardImage>
      <ImageOrVideo project_id={project_id} image={image} video={video} />
    </CardImage>
  ) : null;

  const technologiesChips = technologies ? (
    <div>{toChips(technologies)}</div>
  ) : null;

  if (hidden) {
    return null;
  }

  return (
    <Columns>
      <Column>
        <Card id={project_id} className="has-background-grey-dark project">
          <CardHeader>
            <CardHeaderTitle>
              <span ref={projectTitleRef} className='has-text-white'>{t(title)}</span>
            </CardHeaderTitle>
            {openInNewIcon}
            {googlePlay}
            {githubIcon}
            <a
              data-tip={'Copy project permalink'}
              onClick={shareFcn}
              className="card-header-icon"
              href={`#${project_id}`}
            >
              <input type='text' style={{display: 'none'}} ref={copyProjectLinkRef} />
              <img src={share} alt='open in new tab' className='icon' />
            </a>
          </CardHeader>
          {projectVideoOrImage}
          <CardContent>
            <Subtitle className='has-text-light' isSize={6}>{t(description)}</Subtitle>
            <Content className='has-text-white'>
              {t(text)}
            </Content>
            <Content>
              {technologiesChips}
            </Content>
          </CardContent>
        </Card>
      </Column>
    </Columns>
  );
}

function ImageOrVideo(props) {
  const {video, image, project_id} = props;

  if (!video && !image) {
    return null;
  }

  if (!video) {
    return <Image src={image} className='fit-cover' isRatio='16:9' />
  }

  const video_patg_parts = video.split('.')
  const extension = video_patg_parts[video_patg_parts.length - 1];

  return (
    <video controls loop poster={image} id={`${project_id}-video`}>
      <source src={video} type={`video/${extension}`} />
      <source src={video} type="video/mp4" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank"
          >supports HTML5 video</a
        >
      </p>
    </video>
  );
}

function toChips(array) {
  const find_color = text => intToRGB(hashCode(text));
  return array.map(text => <Chip key={text} color={find_color(text)} text={text} />);
}

// Source: https://stackoverflow.com/questions/2519818/create-a-permalink-with-javascript
function toPermalink(str) {
    return str.replace(/[^a-z0-9]+/gi, '-').replace(/^-*|-*$/g, '').toLowerCase();
}

function copyToClipboard(value) {
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

// Source: https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
function hashCode(str) { // java String#hashCode
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
} 

function intToRGB(i){
  var c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}
