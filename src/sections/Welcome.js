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

    if (newBackground)
      newBackground.classList.add('showing');

    //const newBackground = `url('${newBackgroundFilename}')`;
    //this.rootRef.current.style.backgroundSize = 'cover';

    // this.rootRef.current.setAttribute('data-bg', newBackground);
    [].forEach.call(document.querySelectorAll('button[tag]'), (button) => {
      button.classList.remove('is-primary');
    });
    //document.querySelector('button[tag="' + this.state.current_locale + '"]').classList.add('is-primary');
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

    document.title = t('misc.name');

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
                <NavRight isMenu>
                  <TranslationButtons selected={this.state.current_locale} changeLanguage={changeLanguage} />
                </NavRight>
              </Nav>
            </HeroHeader>

            <HeroBody>
              <Container hasTextAlign='centered' className="title">
                <Title className="name-title major">{t('misc.name')}</Title>
                <Title className="intro minor">{t('welcome.intro')}</Title>

                <Title className="medium">{t('welcome.title.punchline')}</Title>

                <SocialMedia />

                <a href="mailto:me@akinyele.ca" className="contact-me">me@akinyele.ca</a>
              </Container>
            </HeroBody>
            <HeroFooter>
              <p>
                <a ref={this.scrollRef} href="#about-me">
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
