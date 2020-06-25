import React, { useState } from 'react';
import { NotFound } from '.';
import { projectFor as findProjectForName } from '../config/projects';
import { myFace } from '../icons';
import {useTranslation as i18n} from 'react-i18next';
import { Navbar, NavbarBrand, NavbarItem, Progress, Hero, HeroBody, Container, Title, Subtitle } from 'bloomer';
import { Link } from '../components';

export default function ProjectPreview(props) {
  const project = findProjectForName(props.match.params.name);
  const [bodyLoading, setBodyLoading] = useState(true);
  const onBodyLoaded = (e) => {
    console.log(bodyLoading);
    setBodyLoading(false);
  }

  if (project) {
    return (
      <ProjectNavbar project={project}>
        <PreviewBody project={project} loading={bodyLoading} onLoad={onBodyLoaded} />
      </ProjectNavbar>
    )
  }

  return <NotFound />
}

function ProjectNavbar(props) {
  const {t} = i18n();
  const {project} = props;
  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <NavbarItem>
            <Link href="/"><img src={myFace} style={{marginRight: '10px'}} /></Link>
            <span>{t(project.title)}</span>
          </NavbarItem>
        </NavbarBrand>
      </Navbar>
      {props.children}
    </div>
  )
}

function PreviewBody(props) {
  const {project, onLoad, loading} = props;
  const {t} = i18n();

  const loadingDisplay = loading ? 'flex' : 'none';
  const iframeDisplay = loading ? 'none' : 'block';

  return (
    <div>
      <Hero style={{display: loadingDisplay}} isSize='large'>
        <HeroBody align>
          <Container hasTextAlign='centered'>
            <Title>{t(project.title)} is loading...</Title>
            <Subtitle>Please wait as this can take a little while depending on the app.</Subtitle>
            <Progress isColor='primary' />
          </Container>
        </HeroBody>
      </Hero>
      <iframe
        src={project.src}
        onLoad={onLoad}
        style={{display: iframeDisplay, height: 'calc(100vh - 3.25rem)', width: '100vw'}}
        />
    </div>
  )
}
