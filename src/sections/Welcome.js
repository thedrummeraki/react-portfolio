import React from 'react';
import { withTranslation } from 'react-i18next';
import './Welcome.css';

import {
  Hero,
  Container,
  Title,
  Button,
  Nav,
  NavRight,
  HeroHeader,
  HeroBody,
  HeroFooter,
} from 'bloomer';
import { /*Gravatar,*/ SocialMedia, TranslationButtons } from '../components';
import Background from '../components/Background';
import SmoothScroll from 'smooth-scroll';

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
    document.querySelector('button[tag="' + this.state.current_locale + '"]').classList.add('is-primary');
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

    return (
      <div ref={this.rootRef} className="Welcome">
        <Background 
          selected={this.state.background}
          from={1}
          to={19}
          config={{}} />
        <div className="overlay">
          <Hero
            className="has-text-white-ter Welcome"
            isSize='medium' isFullHeight>

            <HeroHeader>
              <Nav>
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
              </Container>
            </HeroBody>
            <HeroFooter>
              <a ref={this.scrollRef} href="#about-me">
                <Button className="discover">{t('welcome.discover')}</Button>
              </a>
            </HeroFooter>
          </Hero>
        </div>
      </div>
    )
  }
}

export default withTranslation()(Welcome);
