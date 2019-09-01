import React from 'react';
import {Image} from 'bloomer';
import {useTranslation} from 'react-i18next';

export default function Job(props) {
  const {t} = useTranslation();

  return(
    <div>
      {renderLogo(props.logo, props.link)}
      <Title contents={props.company} />
      <p><u>{props.title}</u></p>
      <p><i>{getDates(props.start, props.end, t)}</i></p>
      <p>{props.location}</p>
    </div>
  );
}

function Title(props) {
  return (
    <p><b>{props.contents}</b></p>
  )
}

function getDates(start, end, t) {
  if (start && end) {
    return `${start} -> ${end}`;
  } else if (start) {
    return `${t('misc.date.starts', {date: start})}`
  } else if (end) {
    return `${t('misc.date.until', {date: end})}`
  }
}

function renderLogo(logo, link) {
  if (logo) {
    const image = <Image className="container" isSize="32x32" src={logo} />;
    if (link) {
      return <a href={link} rel="noopener noreferrer" target="_blank">{image}</a>;
    }
    return image;
  }
}
