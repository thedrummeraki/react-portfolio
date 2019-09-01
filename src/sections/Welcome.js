import React from 'react';
import { withTranslation } from 'react-i18next';
import LazyLoad from "vanilla-lazyload";
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

if (!document.lazyLoadInstance) {
  const lazyloadConfig = {elements_selector: ".lazy"};
  document.lazyLoadInstance = new LazyLoad(lazyloadConfig);
}

class Welcome extends React.PureComponent {
  state = {
    background: 1,
    current_locale: (localStorage['current_locale'] || 'en'),
  }

  constructor(props) {
    super(props);
    this.rootRef = React.createRef();
  }

  componentDidMount() {
    this.timer = setInterval(this.switchBackground, 7500);
    this.shuffledBackgrounds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    document.lazyLoadInstance.update();
    this.switchBackground();
  }

  componentDidUpdate() {
    const newBackgroundSelector = `.bg${this.state.background}`;
    const newBackground = document.querySelector(newBackgroundSelector);
    const previousBackground = document.querySelector('.fadein');

    previousBackground.classList.add('fadeout');

    setTimeout(() => {
      previousBackground.classList.remove('fadein');
      setTimeout(() => {
        newBackground.classList.remove('fadeout');
        newBackground.classList.add('fadein');
      }, 1000);
    }, 1000);

    //const newBackground = `url('${newBackgroundFilename}')`;
    //this.rootRef.current.style.backgroundSize = 'cover';

    // this.rootRef.current.setAttribute('data-bg', newBackground);
    [].forEach.call(document.querySelectorAll('button[tag]'), (button) => {
      button.classList.remove('is-primary');
    });
    document.querySelector('button[tag="' + this.state.current_locale + '"]').classList.add('is-primary');
    document.lazyLoadInstance.update();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  switchBackground = () => {
    const newBackgroundId = this.shuffledBackgrounds[this.state.background % 9];
    this.setState({background: newBackgroundId});
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
        <div className="bg">
          <div className="bg1 img fadein"></div>
          <div className="bg2 img fadeout"></div>
          <div className="bg3 img fadeout"></div>
          <div className="bg4 img fadeout"></div>
          <div className="bg5 img fadeout"></div>
          <div className="bg6 img fadeout"></div>
          <div className="bg7 img fadeout"></div>
          <div className="bg8 img fadeout"></div>
          <div className="bg9 img fadeout"></div>
        </div>
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
              <Container hasTextAlign='centered'>
                <Title isSize={1} className="name-title">{t('misc.name')}</Title>
                <p className="intro">{t('welcome.intro')}</p>

                <Title isSize={5}>{t('welcome.title.punchline')}</Title>

                <SocialMedia />
              </Container>
            </HeroBody>
            <HeroFooter>
              <Button className="discover">{t('welcome.discover')}</Button>
            </HeroFooter>
          </Hero>
        </div>
      </div>
    )
  }
}

export default withTranslation()(Welcome);
