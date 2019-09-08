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
import {tanoshimu, notaki, crystal_clear} from '../backgrounds';
import {Link, Skill, ResumeJob, Chip, Project} from '../components';
import projects from '../config/projects';
import './Resume.css';

export default function Resume() {
  const {t} = i18n();
  document.title = t('resume.title');

  return (
    <div className="Resume">
      <ResumeHeader i18n={i18n} />
      <Container className="details">
        <Container>
          <Summary />
          <AboutMyself />
        </Container>
        <Container>
          <Languages />
          <Skills />
          <SoftwareKnowledge />
        </Container>
      </Container>

      <Hero isSize='small' isColor='primary'>
        <HeroBody>
          <Container className='details wider'>
            <WorkExperience />
          </Container>
        </HeroBody>
      </Hero>
      
      <Hero isSize='small' className='has-background-dark'>
        <HeroBody>
          <Container className='details'>
            <Container>
              <MyProjects />
            </Container>
            <Container>
              <OtherProjects />
            </Container>
          </Container>
        </HeroBody>
      </Hero>
    </div>
  )
};

function ResumeHeader(props) {
  const {t} = i18n();

  return (
    <Hero isFullHeight className='resume-background'>
      <HeroHeader style={{display: 'none'}}>
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
          <Link href="/">
          <img src={myFace} alt={t('misc.name.oneline')} className="profile" />
          </Link>
          <Title className='has-text-white' isSize={2}>{t('misc.name.oneline')}</Title>

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

function Summary() {
  return (
    <div className="info-card">
      <Title isSize={5}>SUMMARY</Title>
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
          <Title isSize={6}>About myself</Title>
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
    <div className='info-card'>
      <Title isSize={5}>SKILLS</Title>
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
          <Title isSize={6}>General Skills</Title>
          <Skill name="Ruby - Rails" rating={5} />
          <Skill name="JavaScript" rating={5} />
          <Skill name="Python" rating={4} />
          <Skill name="Android" rating={4} />
          <Skill name="C++" rating={3} />
        </CardContent>
      </Card>
    </div>
  );
}

function SoftwareKnowledge() {
  return (
    <div className='info-card'>
      <Card>
        <CardContent>
          <Title isSize={6}>Akinyele's keywords</Title>
          <Chip text='Quality・Trust' />
          <Chip text='Project management' />
          <Chip text='High impact' />
          <Chip text='Constant learner' />
          <Chip text='Long-term oriented' />
        </CardContent>
      </Card>
    </div>
  );
}

function MyProjects() {
  const {t} = i18n();
  const mainProjectsMarkup = projects.main.map(project => <Project {...project} />);

  return (
    <div className='info-card projects'>
      <Title className='has-text-light' isSize={5}>{t('projects.title.main')}</Title>
      {mainProjectsMarkup}
    </div>
  )
}

function OtherProjects() {
  const {t} = i18n();
  const otherProjectsMarkup = projects.other.map(project => <Project {...project} />);

  return (
    <div className='info-card projects'>
      <Title className='has-text-light' isSize={5}>{t('projects.title.other')}</Title>
      {otherProjectsMarkup}
    </div>
  )
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
              'High impact decision making affecting thousands of Shopify Partners',
              'Shipping high quality code every day to keep systems sleemless',
              'Further deeped my technical skills with Rails - learned React',
              'Applied software eng skills by being involded in project from start to finish'
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
