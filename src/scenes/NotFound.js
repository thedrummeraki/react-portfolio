import React from 'react';
import {Hero, HeroBody, Container, Title} from 'bloomer';

import './NotFound.css';

export default function NotFound() {
  return (
    <div className="overlay">
      <NotFoundBackground />

      <Hero isFullHeight>
        <HeroBody className="has-text-dark">
          <Container hasTextAlign='centered'>
            <Title isSize={1}>404 not found</Title>
          </Container>
        </HeroBody>
      </Hero>
    </div>
  );
}

function NotFoundBackground() {
  return (
    <div className="not-found">
    </div>
  );
}
