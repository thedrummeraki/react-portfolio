import React from 'react';
import { withTranslation } from 'react-i18next';
import './Welcome.css';

import {
  Hero,
  Container,
  Title,
  Button,
  Nav,
  NavLeft,
  NavRight,
  HeroHeader,
  HeroBody,
  HeroFooter,
  NavItem,
} from 'bloomer';
import { /*Gravatar,*/ SocialMedia, TranslationButtons } from '../components';
import {Background, BackgroundLocation} from '../components';
import SmoothScroll from 'smooth-scroll';
import locationsConfig from '../config/locations';

class Welcome extends React.PureComponent {
  state = {
    background: 1,
    current_locale: (localStorage['current_locale'] || 'en'),
  }

  constructor(props) {
    super(props);
    this.rootRef = React.createRef();
    this.scrollRef = React.createRef();
  }

  componentDidMount() {
    this.timer = setInterval(this.switchBackground, 7500);

    this.switchBackground();

    new SmoothScroll('a[href*="#"]', {
      speed: 1500,
      easing: 'easeInOutQuint'
    });
  }

  componentDidUpdate() {
    const newBackgroundSelector = `.bg${this.state.background}`;
    const newBackground = document.querySelector(newBackgroundSelector);
    const previousBackground = document.querySelector('.showing');

    if (previousBackground) {
      previousBackground.classList.remove('showing');
    }

    if (newBackground) {
      newBackground.classList.add('showing');
    }

    [].forEach.call(document.querySelectorAll('button[tag]'), (button) => {
      button.classList.remove('is-primary');
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  switchBackground = () => {
    const count = document.backgroundIds.length;
    const newBackgroundId = document.backgroundIds[this.state.background % count];
    if (newBackgroundId) {
      this.setState({background: newBackgroundId});
    }
  }

  render() {
    const {t, i18n} = this.props;
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
      this.setState({current_locale: lng});
      localStorage['current_locale'] = lng;
    };

    // Forcing locale to be en for now
    if (i18n.language !== 'en')
      i18n.changeLanguage('en');

    document.title = t('misc.name.oneline');

    console.log("State background: ", this.state.background)

    return (
      <div ref={this.rootRef} className="Welcome">
        <Background
          showing={this.state.background}
          from={1}
          to={19} />

        <div className="overlay">
          <Hero
            className="has-text-white-ter Welcome"
            isSize='medium' isFullHeight>

            <HeroHeader>
              <Nav>
                <NavLeft>
                  <NavItem isBrand>
                    <BackgroundLocation
                      showing={this.state.background}
                      config={locationsConfig}  />
                  </NavItem>
                </NavLeft>
                <NavRight isHidden isMenu>
                  <TranslationButtons selected={this.state.current_locale} changeLanguage={changeLanguage} />
                </NavRight>
              </Nav>
            </HeroHeader>

            <HeroBody>
              <Container hasTextAlign='centered' className="title">
                <div className="name">
                  <Title isSize={1} className="name-title">{t('misc.name.multiline.line1')}</Title>
                  <Title isSize={1} className="name-title line2 has-text-primary">{t('misc.name.multiline.line2')}</Title>
                </div>

                <Title isSize={3}>{t('welcome.title.punchline')}</Title>

                <SocialMedia />

                <a href="mailto:me@akinyele.ca" className="contact-me">me@akinyele.ca</a>
              </Container>
            </HeroBody>
            <HeroFooter>
              <p style={{marginBottom: '2em'}}>
                <a ref={this.scrollRef} href="#introduction">
                  <Button className="discover">{t('welcome.discover')}</Button>
                </a>
              </p>
            </HeroFooter>
          </Hero>
        </div>
      </div>
    )
  }
}

export default withTranslation()(Welcome);
