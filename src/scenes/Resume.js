import React from 'react';
import {
  Hero,
  HeroHeader,
  Nav,
  NavLeft,
  NavItem,
  NavCenter,
  NavRight,
  HeroBody,
  Container,
  Title,
  HeroFooter,
  Tabs,
  TabList,
  Tab,
  TabLink,
  Icon,
  Card,
  CardContent
} from 'bloomer';
import {useTranslation as i18n} from 'react-i18next';
import {myFace, github, linkedin, skype, mail} from '../icons';
import './Resume.css';

export default function Resume() {
  const {t} = i18n();
  document.title = t('resume.title');

  return (
    <Hero isSize='small' isColor='dark' className="Resume">
      <ResumeHeader i18n={i18n} />

      <HeroBody>
        <Container hasTextAlign='centered'>
          <img src={myFace} alt={t('misc.name.oneline')} className="profile" />
          <Title isSize={2}>{t('misc.name.oneline')}</Title>

          <div className="details">
            <Card className="has-background-grey-dark">
              <CardContent className="has-text-left">
                <p><img className="icon" src={mail} /> <a href={"mailto:me@akinyele.ca"}>me@akinyele.ca</a></p>
                <p><img className="icon" src={github} /> <a href="https://github.com/thedrummeraki">thedrummeraki</a></p>
                <p><img className="icon" src={linkedin} /> <a href="https://github.com/thedrummeraki">akinyele-cafe-febrissy</a></p>
                <p><img className="icon" src={skype} /> <a href="https://github.com/thedrummeraki">skype</a></p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </HeroBody>
    </Hero>
  )
};

function ResumeHeader(props) {
  const {t} = props.i18n();

  return (
    <HeroHeader>
      <Nav>
        <NavLeft>
          <NavItem isBrand>{t('resume.title')}</NavItem>
        </NavLeft>
        <NavCenter>
          <NavItem>
            <Icon className="fa fa-github" />
          </NavItem>
          <NavItem>
            <Icon className="fa fa-twitter" />
          </NavItem>
        </NavCenter>
        <NavRight isMenu>
          <NavItem>{t('resume.home')}</NavItem>
        </NavRight>
      </Nav>
    </HeroHeader>
  );
}
