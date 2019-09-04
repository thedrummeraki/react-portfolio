import React from 'react';
import {Hero, HeroBody, Container, Title} from 'bloomer';
import {useTranslation as i18n} from 'react-i18next';

import './NotFound.css';

export default function NotFound() {
  const {t} = i18n();
  document.title = t('misc.not-found.title');

  return (
    <div className="overlay">
      <div className="not-found"></div>

      <Hero isFullHeight>
        <HeroBody className="has-text-dark">
          <Container hasTextAlign='centered'>
            <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" className="profile" alt={t('misc.name.oneline')} />
            
            <Title isSize={3}>{t('misc.not-found.woops')}</Title>
            <div className="lost">
              {t('misc.not-found.statement')}
            </div>

            <a href="/" className="pretty-button button">{t('misc.not-found.home-page')}</a>
          </Container>
        </HeroBody>
      </Hero>
    </div>
  );
}
