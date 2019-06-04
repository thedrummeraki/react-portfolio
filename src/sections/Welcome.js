import React from 'react';
import {
  Hero,
  Container,
  Title,
  HeroBody,
} from 'bloomer';
import { Gravatar, SocialMedia } from '../components';


export default function Welcome() {
  return (
    <Hero className="has-background-dark has-text-white-ter" isSize='medium' isFullHeight>
      <HeroBody>
        <Container hasTextAlign='centered'>
          <Gravatar
            centered
            rounded
            size="128"
            hash="d6065a7482bf81072cda09f028f6d1df" />

          <Title>Hi there! My name is Akinyele</Title>
          <Title isSize={5}>FORWARD THINKING</Title>
          <SocialMedia />
        </Container>
      </HeroBody>
    </Hero>
  )
}
