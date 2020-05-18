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
  Column,
  Content,
  Section
} from 'bloomer';
import {useTranslation as i18n} from 'react-i18next';
import {myFace, github, linkedin, skype, mail, locale} from '../icons';
import {cbn, crc, rakuten, shopify} from '../logos';
import {Link, Skill, ResumeJob, Chip, Project} from '../components';
import projects from '../config/projects';
import './Resume.css';

export default function Resume() {
  const {t} = i18n();
  document.title = t('resume.title');

  return (
    <div className="Resume">
      <ResumeHeader i18n={i18n} />
      <Hero isSize='small'>
        <HeroBody>
          <Columns isCentered>
            <Column className="is-6">
              <Container>
                <Summary />
                <AboutMyself />
              </Container>
              <Container>
                <Languages />
                <Skills />
                <SoftwareKnowledge />
                <Hackathons />
              </Container>
              <Container>
                <HimaTsubishi />
              </Container>
            </Column>
          </Columns>
        </HeroBody>
      </Hero>

      <Hero isSize='small' isColor='primary'>
        <HeroBody>
          <Columns isCentered>
            <Column className="is-8">
              <WorkExperience />
            </Column>
          </Columns>
        </HeroBody>
      </Hero>
      
      <Hero isSize='small' className='has-background-dark'>
        <HeroBody>
          <Columns isCentered>
            <Column className="is-6">
              <Container>
                <MyProjects />
              </Container>
              <Container>
                <OtherProjects />
              </Container>
            </Column>
          </Columns>
        </HeroBody>
      </Hero>
    </div>
  )
};

function ResumeHeader(props) {
  const {t} = i18n();

  return (
    <Hero isFullHeight className='resume-background'>
      <HeroBody>
        <Container hasTextAlign='centered'>
          <Link href="/">
          <img src={myFace} alt={t('misc.name.oneline')} className="profile" />
          </Link>
          <Section>
            <Title className='has-text-white' isSize={2}>{t('misc.name.oneline')}</Title>
          </Section>

          <Columns isCentered>
            <Column className="is-6 details">
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
            </Column>
          </Columns>
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
          <p style={{fontWeight: 'bold'}}>
            Software Engineer thriving in quality and creativity. My motto is: "There's a better way to do things."
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
            Linux - Ruby - Rails Lover, hacker.
          </p>
          <p>
            “Get-to-the-point”, detail oriented mind with a bright personality.
          </p>
          <p>
            "Foward thinking": Let's look at how it was, how it and <i>how it <u>will</u> be</i>.
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
          <Content>
            <Title isSize={6}>General Skills</Title>
            <Skill name="Ruby on Rails" rating={5} />
            <Skill name="JavaScript" rating={5} />
            <Skill name="Python" rating={4} />
            <Skill name="Java" rating={4} />
            <Skill name="Android" rating={3} />
          </Content>

          <Content>
            <Title isSize={6}>I have also worked with...</Title>
            <Chip text="Utility bots" />
            <Chip text="OAuth" />
            <Chip text="Authorization/Authentication" />
            <Chip text="Video processing" />
            <br/><br/>
            <Chip text="Artificial Intelligence" />
            <Chip text="C++" />
            <Chip text="Unity" />
            <Chip text="C#" />
            <Chip text="React" />
            <Chip text="Ruby" />
            <Chip text="Apache" />
            <Chip text="PHP" />
            <Chip text="node.js" />
            <Chip text="Spring" />
            <Chip text="SOAP/WSDL" />
          </Content>
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
          <Chip text='Quality &amp; Trust' />
          <Chip text='Project management' />
          <Chip text='High impact' />
          <Chip text='Constant learner' />
          <Chip text='Long-term oriented' />
        </CardContent>
      </Card>
    </div>
  );
}

function Hackathons() {
  return (
    <div className='info-card dark-link'>
      <Card>
        <CardContent>
          <Content>
            <Title isSize={6}>Hackathons</Title>
            <ul>
              <li>In <b>March 2020</b>, during <Link newTab href="https://www.shopify.com/partners/blog/18969895-why-hack-days-are-great-for-designers">Shopify Hackdays</Link>, we designed a "first-party" app (a Shopify app developped by Shopify) aspiring to help people sell and purchase soup locally <Link newTab href="https://www.shopify.ca/covid19">during COVID-19</Link>.</li>
              <li>Built an internal complaint dashboard during the Shopify Hackdays in <b>August 2019</b>. The project was picked up by another team and still beign worked on at this time in hopes to help employees express their frustrations at work.</li>
              <li>Participated in <Link newTab href="https://events.carleton.ca/ihack-ottawa-2019/">iHack's CTF at Carleton University</Link> in <b>June 2019</b>. Learnt about basic security vulnerabilities in software, compiled or not.</li>
              <li>Designed an <Link newTab href="https://github.com/SurienDG/UOttahacks2019">voice-operated racing game</Link> during University of Ottawa's <Link newTab href="https://2019.uottahack.ca">uOttaHack</Link> in <b>February 2019</b>. The goal was to make a game accessible to people with disabilities (namely paralysis).</li>
              <li>Thought out an new ticketing system that uses a phone's camera during <Link newTab href="https://uottahack.ca">uOttaHack</Link> in <b>February 2018</b> that would improve the current ticketing system present mostly in clinics.</li>
              <li>Successfully designed a giveaway application using a public Shopify API during <Link newTab href="https://www.facebook.com/hackdecode/">deCODE Hackathon</Link> in <b>April 2017</b>.</li>
            </ul>
          </Content>
        </CardContent>
      </Card>
    </div>
  )
}

function HimaTsubishi() {
  return (
    <div className='info-card dark-link'>
      <Title isSize={5}>HOBBIES</Title>
      <Card>
        <CardContent>
          <Content>
            <ul>
              <li>Watching anime. My latest favourite anime in 2020: <Link newTab href="https://www.funimation.com/shows/kaguya-sama-love-is-war">Kaguya-sama: Love is War? (かぐや様は告らせたい？天才たちの恋愛頭脳戦)</Link>.</li>
              <li>Video games. My latest favourite game: <Link newTab href="https://www.nintendo.com/games/detail/muse-dash-switch/">Muse Dash</Link>, also on the Nintendo Switch.</li>
              <li>Biking! I go to work from when I can (from March to November). I own a vintage Bianchi bike. Stylish and quick.</li>
              <li>Cooking. And baking as well as preparing treats. I am mostly intrested in bread and jam.</li>
              <li>Coding. My favourite language of is <Link newTab href="https://www.ruby-lang.org/en/">Ruby</Link>. Check out my projects below!</li>
            </ul>
          </Content>
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
  const {t} = i18n();

  return (
    <Container>
      <Title isSize={5}>WORK EXPERIENCE</Title>
      <Container style={{marginBottom: '2em'}}>
        <ResumeJob
          hidden
          title="Software Developer (current)"
          company="Shopify"
          from="January 2020"
          logo={shopify}
          logoURL={t('resume.jobs.shopify.url')}
          experience={[
            'Significantly improved overall user experience',
            ''
          ]}
        />
      </Container>
      <Columns isCentered>
        <Column isSize={6}>
          <ResumeJob
            title="Backend developer (Internship)"
            company="Shopify"
            from="May 2019"
            to="August 2019"
            logo={shopify}
            logoURL={t('resume.jobs.shopify.url')}
            experience={[
              'resume.jobs.shopify.experience.1',
              'resume.jobs.shopify.experience.2',
              'resume.jobs.shopify.experience.3',
              'resume.jobs.shopify.experience.4'
            ]}
          />
        </Column>
        <Column isSize={6}>
          <ResumeJob 
              title="MySQL Team Application Developer (COOP)"
              company="Rakuten"
              from="May 2018"
              to="December 2018"
              logo={rakuten}
              logoURL={t('resume.jobs.rakuten.url')}
              experience={[
                'resume.jobs.rakuten.experience.1',
                'resume.jobs.rakuten.experience.2',
                'resume.jobs.rakuten.experience.3'
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
            logo={crc}
            logoURL={t('resume.jobs.crc.url')}
            experience={[
              'resume.jobs.crc.experience.1',
              'resume.jobs.crc.experience.2'
            ]}
          />
        </Column>
        <Column isSize={6}>
          <ResumeJob 
              title="Linux developer (COOP)"
              company="Canadian Bank Note Company"
              from="4 months in 2016"
              to="4 months in 2017"
              logo={cbn}
              logoURL={t('resume.jobs.cbn.url')}
              experience={[
                'resume.jobs.cbn.experience.1',
                'resume.jobs.cbn.experience.2',
                'resume.jobs.cbn.experience.3'
              ]}
            />
        </Column>
      </Columns>
    </Container>
  )
}
