import React from 'react';

import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardContent,
  Title
} from 'bloomer';

import {useTranslation as i18n} from 'react-i18next';
import {Link} from '../components';

export default function ResumeJob(props) {
  const {
    title,
    logo,
    logoURL,
    company,
    from,
    to,
    experience
  } = props;

  const timeLineMarkup = getTimelineMarkup(from, to);

  const experienceText = experience.map(line => {
    return <p>- {line}</p>
  });

  const logoMarkup = logoURL && logo ? (
    <Link newTab className="card-header-icon" href={logoURL}>
      <img src={logo} alt='open in new tab' className='icon' />
    </Link>
  ) : null;

  return (
    <Card>
      <CardHeader>
        <CardHeaderTitle>
          {title}
        </CardHeaderTitle>
        {logoMarkup}
      </CardHeader>
      <CardContent>
        <Title isSize={4} className='has-text-dark'>{company}</Title>
        <p className='has-text-grey-light' style={{marginBottom: '10px'}}>{timeLineMarkup}</p>
        {experienceText}
      </CardContent>
    </Card>
  );
}

function getTimelineMarkup(from, to) {
  const {t} = i18n();

  if (!from && !to) {
    return null;
  }

  if (!from) {
    return (
      <p>{t('misc.date.until', {date: to})}</p>
    );
  }

  if (!to) {
    return (
      <p>{t('misc.date.starts', {date: from})}</p>
    );
  }

  return (
    <p>{from} {t('misc.date.separator')} {to}</p>
  )
}