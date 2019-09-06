import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardHeaderTitle,
  CardHeaderIcon,
  Subtitle,
  Content,
  CardImage,
  Image
} from 'bloomer';
import {github, open_in_new, google_play} from '../icons';
import Link from './Link';

export default function Project(props) {
  const {
    title,
    githubPath,
    src,
    googlePlaySrc,
    image,
    description,
    text,
    isClosedSource
  } = props;

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

  const projectImage = image ? (
    <CardImage>
      <Image src={image} isRatio='16:9' />
    </CardImage>
  ) : null;

  const closedSource = isClosedSource ? (
    <b>[Closed Source] </b>
  ) : null;

  return (
    <Card className="has-background-grey-dark">
      <CardHeader>
        <CardHeaderTitle>
          <span className='has-text-white'>{title}</span>
        </CardHeaderTitle>
        {openInNewIcon}
        {googlePlay}
        {githubIcon}
      </CardHeader>
      {projectImage}
      <CardContent>
        <Subtitle className='has-text-light' isSize={6}>{description}</Subtitle>
        <Content className='has-text-white'>
          {closedSource}{text}
        </Content>
      </CardContent>
    </Card>
  );
}
