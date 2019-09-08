import React from 'react';
import {
  Container
} from 'bloomer';
import {useTranslation as i18n} from 'react-i18next';
import {myFace} from '../icons';
import './Introduction.css';
import {Link} from '../components';

export default function Introduction() {
  const {t} = i18n();

  return (
    <div id="introduction" className="introduction has-akinyele-background">
      <Container className="padded is-size-5">
        <img src={myFace} className="profile" alt={t('misc.name.oneline')} />
        <div className="paragraph intro is-size-4">
          <p>{t('introduction.paragraph.intro.stat1')}</p>
          <p>{t('introduction.paragraph.intro.stat2')}</p>
        </div>
        <div className="paragraph why">
          <p>{t('introduction.paragraph.why.stat1')}</p>
          <p>{t('introduction.paragraph.why.stat2')}</p>
        </div>
        <div className="paragraph kaizen">
          <p>{t('introduction.paragraph.kaizen.stat1')}</p>
        </div>
        <div className="paragraph life">
          <p>{t('introduction.paragraph.life.motto')}</p>
          <p>{t('introduction.paragraph.life.stat1')}</p>
        </div>
        <div className="paragraph experiences">
          <p>{t('introduction.paragraph.experiences.languages')}</p>
          <p>{t('introduction.paragraph.experiences.skills')}</p>
        </div>
        <div className="paragraph outro">
          <p><strong>{t('introduction.paragraph.outro')}</strong></p>
        </div>
        <Link href="/resume">
          <button className="discover">{t('resume.check')}</button>
        </Link>
      </Container>
    </div>
  );
}
