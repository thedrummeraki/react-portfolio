import React from 'react';
import {Container, Title, Content} from 'bloomer';
import {StyleRoot} from 'radium';
import {useTranslation as i18n} from 'react-i18next';

import {Job, Timeline} from '../components';

import {
  cbn,
  crc,
  graduation,
  rakuten,
  shopify,
  uottawa,
} from '../logos';
import {Link} from '../components';

export default function AboutMe() {
  const {t} = i18n();
  return (
    <div id="about-me" className="has-background-grey-dark">
      <Container className="padded">
        <Title className="has-text-centered has-text-white">{t('about.title')}</Title>
        <StyleRoot>
          <Timeline animations={false} activeColor='#00d1b2'>
            <Job
              company={t('about.entries.graduation.title')}
              logo={graduation}
              title={t('about.entries.graduation.when')} />
            <Job
              isInternship
              company={t('about.entries.shopify.company')}
              logo={shopify}
              title={t('about.entries.shopify.title')}
              start={t('about.entries.shopify.start')}
              location={t('misc.locations.ottawa')} />
            <Job
              isInternship
              company={t('about.entries.rakuten.company')}
              logo={rakuten}
              title={t('about.entries.rakuten.title')}
              start={t('about.entries.rakuten.start')}
              end={t('about.entries.rakuten.end')}
              location={t('misc.locations.tokyo')} />
            <Job
              isInternship
              company={t('about.entries.crc.company')}
              logo={crc}
              title={t('about.entries.crc.title')}
              start={t('about.entries.crc.start')}
              end={t('about.entries.crc.end')}
              location={t('misc.locations.ottawa')} />
            <Job
              isInternship
              company={t('about.entries.cbn.company')}
              logo={cbn}
              title={t('about.entries.cbn.title-2')}
              start={t('about.entries.cbn.start-2')}
              end={t('about.entries.cbn.end-2')}
              location={t('misc.locations.ottawa')} />
            <Job
              isInternship
              company={t('about.entries.cbn.company')}
              logo={cbn}
              title={t('about.entries.cbn.title-1')}
              start={t('about.entries.cbn.start-1')}
              end={t('about.entries.cbn.end-1')}
              location={t('misc.locations.ottawa')} />
            <Job
              isInternship
              company={t('about.entries.uottawa.program')}
              logo={uottawa}
              title={t('about.entries.uottawa.school')}
              start={t('about.entries.uottawa.start')}
              location={t('misc.locations.ottawa')} />
          </Timeline>
        </StyleRoot>
      </Container>
    </div>
  );
}
