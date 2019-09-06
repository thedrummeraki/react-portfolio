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
      <CardImage>
        <Image isRatio='16:9' src={src} />
      </CardImage>
      <CardContent>
        <Title isSize={4}>{company}</Title>
        {experienceText}
      </CardContent>
    </Card>
  );
}