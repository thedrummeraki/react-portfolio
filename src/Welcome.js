import React from 'react';
import {
  Hero,
  HeroHeader,
  Nav,
  NavLeft,
  NavItem,
  NavCenter,
  NavRight,
  Icon,
  Container,
  Title,
  Tabs,
  TabList,
  Tab,
  TabLink,
  HeroBody,
  HeroFooter,
} from 'bloomer';
import Gravatar from './Gravatar';
import SocialMedia from './SocialMedia';


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
