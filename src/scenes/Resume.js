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
import {tanoshimu, notaki} from '../backgrounds';
import {Link, Skill, ResumeJob, Chip, Project} from '../components';
import './Resume.css';

export default function Resume() {
  const {t} = i18n();
  document.title = t('resume.title');

  return (
    <div className="Resume">
      <ResumeHeader i18n={i18n} />
      <Container className="details wider">
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
      
      <Hero isSize='small' className='has-background-grey-dark'>
        <HeroBody>
          <Container className='details wider'>
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
  const {t} = props.i18n();

  return (
    <Hero isSize='medium' className='resume-background'>
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
          <Skill name="Python" rating={5} />
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
          <Chip text='Quality and Trust' />
          <Chip text='Project management' />
          <Chip text='High impact' />
          <Chip text='Always learning' />
          <Chip text='Long-term oriented' />
        </CardContent>
      </Card>
    </div>
  );
}

function MyProjects() {
  const currentLocale = localStorage['current_locale'] || 'en';
  return (
    <div className='info-card projects'>
      <Title className='has-text-light' isSize={5}>PROJECTS</Title>
      <Project
        isClosedSource
        title='Tanoshimu'
        src='https://demo.youranime.moe'
        image={tanoshimu[currentLocale]}
        description='A private streaming anime website.'
        text='I started this project in 2016 as a way to learn about Ruby on Rails. My challenge: development of a secure API for viewing the videos. Android version available.'
        technologies={['Ruby on Rails', 'Ruby', 'Python', 'jQuery']} />

      <Project 
        title='Notaki.ca'
        githubPath='thedrummeraki/notaki.ca'
        src='http://www.forevernote.ca'
        image={notaki}
        description='A note-taking app targeted at students.'
        text='Built as prototype for my UI class. I decided to take this further and complete the application. My biggest challenge was the mechanism for saving the notes.' />    
    </div>
  )
}

function OtherProjects() {
  return (
    <div className='info-card projects'>
      <Title className='has-text-light' isSize={5}>Other projects</Title>
      <Project 
        title='This website'
        githubPath='thedrummeraki/react-portfolio'
        description='A more modern approach to my showing my potential'
        text="A 2019 version of my website. After learning React at Shopify, I decided to learn more of this technology and I am very happy with the results. Of course, lots of aspects need to be improved, but I care very much about progress."
        technologies={['React']} />

      <Project
        title='Tanoshimu (Android version)'
        src='https://demo.youranime.moe'
        githubPath='thedrummeraki/nTanoshimu'
        description='A private streaming anime website.'
        text="This is a mobile version of Have Fun (Tanoshimu). I primarily made this application to improve my anime website's mobile experience."
        technologies={['Android']} />

      <Project 
        isClosedSource
        title='3D Spectrum Visualization'
        description='Visualize 3G and 4G networks in 3D'
        text='This is the project I worked on during my Fall 2017 COOP term. This application built on Unity explores a new way to visualize spectrum in 3D, from scratch.'
        technologies={['C#', 'Unity', 'Python']} /> 

      <Project 
        title='deCODE Hackathon 2017 (Shopify)'
        description='Visualize 3G and 4G networks in 3D'
        text="I participated to last year's deCODE Hackathon in Ottawa (2017). This application was designed for sellers to give away products of their choice, share a link to participants and let them enter the contest. Once the giveaway is over, a winner is automatically selected to receive the prize."
        technologies={['Ruby on Rails']} /> 

      <Project 
        isClosedSource
        title='Have Fun Admin console (for Tanoshimu)'
        description='Visualize 3G and 4G networks in 3D'
        text="Designed to manage the application described above. I log in as an administrator and start managing my anime website's contents." 
        technologies={['Ruby on Rails']} /> 

      <Project 
        title='French Akinyele'
        description='Visualize 3G and 4G networks in 3D'
        src='https://french-akinyele.herokuapp.com'
        text='I made this website for a friend who I started tutoring. I thought we were using too much paper, so I decided to make a quick Bootstrap website.' 
        technologies={['Ruby on Rails']} /> 

      <Project 
        title='CTGS (Conference Travel Grant System)'
        description='Visualize 3G and 4G networks in 3D'
        src='https://seg3502-uottawa.herokuapp.com'
        text='Final project for my "Software Architecture" class at university. This app is a Grant Management System where users can signup under a supervisor. A user may apply for a grant by filling the application. The latter may be granted, rejected or set pending by the supervisor.'
        technologies={['Ruby on Rails']} /> 

      <Project 
        title='Akinoid Reviews'
        description='Visualize 3G and 4G networks in 3D'
        src='https://akinyele-reviews.herokuapp.com'
        text='My first complex website yet. Its primary use is to read movie/anime/video games critiques.'
        technologies={['Ruby on Rails']} /> 

      <Project 
        isClosedSource
        title="Bank Royale d'Aki 2.0"
        description='Visualize 3G and 4G networks in 3D'
        googlePlaySrc='https://play.google.com/store/apps/details?id=com.akinyele.bra.brav20'
        src='https://bra-akinyele.herokuapp.com'
        text='My first Android application. I wanted an application where I can keep my custom banking in a secure way. A web version exists as well'
        technologies={['Ruby on Rails', 'Android']} /> 
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
