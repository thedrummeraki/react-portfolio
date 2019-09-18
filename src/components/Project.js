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
import Chip from './Chip';
import {useTranslation as i18n} from 'react-i18next';

export default function Project(props) {
  const {
    title,
    githubPath,
    src,
    googlePlaySrc,
    image,
    description,
    text,
    technologies
  } = props;
  const {t} = i18n();

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
      <Image src={image} className='fit-cover' isRatio='16:9' />
    </CardImage>
  ) : null;

  const technologiesChips = technologies ? (
    <div>{toChips(technologies)}</div>
  ) : null;

  return (
    <Card className="has-background-grey-dark project">
      <CardHeader>
        <CardHeaderTitle>
          <span className='has-text-white'>{t(title)}</span>
        </CardHeaderTitle>
        {openInNewIcon}
        {googlePlay}
        {githubIcon}
      </CardHeader>
      {projectImage}
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
  );
}

function toChips(array) {
  const find_color = text => intToRGB(hashCode(text));
  return array.map(text => <Chip key={text} color={find_color(text)} text={text} />);
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
