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

export default function ResumeJob(props) {
  const {
    title,
    src,
    company,
    from,
    to,
    experience
  } = props;

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
        {experienceText}
      </CardContent>
    </Card>
  );
}