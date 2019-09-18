import React from 'react';

import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardImage,
  CardContent,
  Image,
  Title
} from 'bloomer';

import {useTranslation as i18n} from 'react-i18next';

export default function ResumeJob(props) {
  const {
    title,
    src,
    company,
    from,
    to,
    experience
  } = props;

  const timeLineMarkup = getTimelineMarkup(from, to);

  const experienceText = experience.map(line => {
    return <p>- {line}</p>
  });

  return (
    <Card>
      <CardHeader>
        <CardHeaderTitle>
          {title}
        </CardHeaderTitle>
      </CardHeader>
      <CardImage style={{display: 'none'}}>
        <Image isRatio='16:9' src={src} />
      </CardImage>
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