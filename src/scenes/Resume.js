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
  Icon,
  Card,
  CardContent,
  Columns,
  Column
} from 'bloomer';
import {useTranslation as i18n} from 'react-i18next';
import {myFace, github, linkedin, skype, mail, locale} from '../icons';
import {cbn, crc, rakuten, shopify} from '../companies';
import './Resume.css';
import Link from '../components/Link';
import ResumeJob from './ResumeJob';

export default function Resume() {
  const {t} = i18n();
  document.title = t('resume.title');

  return (
    <div className="Resume">
      <ResumeHeader i18n={i18n} />
      <Container>
        <Columns>
          <Column isSize={8}>
            <Container>
              <Introduction />
              <AboutMyself />
            </Container>
          </Column>
          <Column isSize={4}>
            <Container>
              <Languages />
              <Skills />
            </Container>
          </Column>
        </Columns>
      </Container>
      <WorkExperience />
      <MyProjects />
    </div>
  )
};

function ResumeHeader(props) {
  const {t} = props.i18n();

  return (
    <Hero isSize='small' isColor='dark'>
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
            <NavItem><Link className="has-text-white" href="/">{t('resume.home')}</Link></NavItem>
          </NavRight>
        </Nav>
      </HeroHeader>

      <HeroBody>
        <Container hasTextAlign='centered'>
          <img src={myFace} alt={t('misc.name.oneline')} className="profile" />
          <Title isSize={2}>{t('misc.name.oneline')}</Title>

          <div className="details">
            <Card className="has-background-grey-dark">
              <CardContent className="has-text-left">
                <p>
                  <img className="icon" src={mail} alt='email' /> 
                  <Link href={"mailto:me@akinyele.ca"}>me@akinyele.ca</Link>
                </p>
                <p>
                  <img className="icon" src={github} alt='github' />
                  <Link newTab href="https://github.com/thedrummeraki">thedrummeraki</Link>
                </p>
                <p>
                  <img className="icon" src={linkedin} alt='linkedin' />
                  <Link newTab href="https://www.linkedin.com/in/akinyele-cafe-febrissy/">akinyele-cafe-febrissy</Link>
                </p>
                <p>
                  <img className="icon" src={skype} alt='skype' />
                  <Link href="skype:aakin013@uottawa.ca">@aakin013</Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </HeroBody>
    </Hero>
  );
}

function Introduction() {
  return (
    <div className="info-card">
      <Card>
        <CardContent>
          <p>
            Software Engineering student seeking a software engineering position in an environment striving for quality.
          </p>
          <p>
            Explores creativity through curiosity and love of research, adores sharing knowledge and getting to know people.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function AboutMyself() {
  return (
    <div className="info-card">
      <Card>
        <CardContent>
          <Title isSize={5}>ABOUT MYSELF</Title>
          <p>
            I consider myself a Linux - Ruby - Rails Lover, hacker.
          </p>
          <p>
            I offer a “get-to-the-point”, detail oriented mind with a bright personality.
          </p>
          <p>
            I also want to apply academic knowledge in a smart way.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function Languages() {
  return (
    <div className='info-card details'>
      <Card>
        <CardContent>
          <p>
            <img className='icon' src={locale.en} alt='en' /> I am fluent in English.
          </p>
          <p>
            <img className='icon' src={locale.fr} alt='fr' /> Ma langue maternelle est le français.
          </p>
          <p>
            <img className='icon' src={locale.jp} alt='jp' /> 日本語でも会話できます。
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function Skills() {
  return (
    <div className='info-card'>
      <Card>
        <CardContent>
          
        </CardContent>
      </Card>
    </div>
  );
}

function WorkExperience() {
  return (
    <Container>
      <Title isSize={5}>WORK EXPERIENCE</Title>
      <Columns isCentered>
        <Column isSize={6}>
          <ResumeJob 
            title="Backend developer"
            company="Shopify"
            from="May 2019"
            to="August 2019"
            src={shopify}
            experience={[
              'the best',
              'experience',
              'i have literally have',
              'all of my life :o'
            ]}
          />
        </Column>
        <Column isSize={6}>
          <ResumeJob 
              title="MySQL Team Application Developer (COOP)"
              company="Rakuten"
              from="May 2018"
              to="December 2018"
              src={rakuten}
              experience={[
                'Responsible for maintaining a Ruby on Rails MySQL administration tool used by over 1000 engineers.',
                'Ensured stability for front-end / back-end with integration and unit testing.',
                'Front-end was improved to keep the same look & feel and giving it a more modern touch, making it easier to use.'
              ]}
            />
        </Column>
      </Columns>

      <Columns isCentered>
        <Column isSize={6}>
          <ResumeJob 
            title="Software Researcher (COOP)"
            company="Government of Canada (CRC)"
            from="September 2017"
            to="December 2017"
            src={crc}
            experience={[
              'Assigned to a Unity 3D project where visualizing 3G and 4G network spectrums was the key for optimizing implementation for the upcoming 5G cellular networks in Canada',
              'Requirements, prototypes and the final proof of concept were presented to the CEO and their colleagues.',
            ]}
          />
        </Column>
        <Column isSize={6}>
          <ResumeJob 
              title="Linux developer"
              company="Canadian Bank Note Company"
              from="4 months in 2016"
              to="4 months in 2017"
              src={cbn}
              experience={[
                'Ensured reliability of security systems by introducing a certification protocol on legacy software',
                'Stand-alone proprietary client-side application for creating more secure SSL certificates.',
                'Implemented software patterns to ensure maintainability of software.'
              ]}
            />
        </Column>
      </Columns>
    </Container>
  )
}

function MyProjects() {
  return (
    <div>

    </div>
  )
}
