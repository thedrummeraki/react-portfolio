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
  NavCenter,
  NavRight,
  NavItem,
  HeroHeader,
  HeroBody,
  HeroFooter,
} from 'bloomer';
import { /*Gravatar,*/ SocialMedia } from '../components';


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
    this.timer = setInterval(this.switchBackground, 10000);
    this.shuffledBackgrounds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    this.switchBackground();
  }

  componentDidUpdate() {
    const newBackgroundFilename = `/bg${this.state.background}.jpg`;
    this.rootRef.current.style.background = `url('${newBackgroundFilename}') no-repeat center center fixed`;
    this.rootRef.current.style.backgroundSize = 'cover';
    [].forEach.call(document.querySelectorAll('button[tag]'), (button) => {
      button.classList.remove('is-primary');
    });
    document.querySelector('button[tag="' + this.state.current_locale + '"]').classList.add('is-primary');
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
        <div className="film">
          <div className="overlay">
          <Hero
            className="has-text-white-ter Welcome"
            isSize='medium' isFullHeight>

            <HeroHeader>
              <Nav>
                <NavRight isMenu>
                  <NavItem>
                    <button
                      className="button"
                      tag="en"
                      onClick={() => {changeLanguage('en')}}
                      >
                        English
                    </button>
                  </NavItem>
                  <NavItem>
                    <button
                      className="button"
                      tag="fr"
                      onClick={() => {changeLanguage('fr')}}
                      >
                        Français
                    </button>
                  </NavItem>
                  <NavItem>
                    <button
                      className="button"
                      tag="ja"
                      onClick={() => {changeLanguage('ja')}}
                      >
                        日本語
                    </button>
                  </NavItem>
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
      </div>
    )
  }
}

export default withTranslation()(Welcome);
