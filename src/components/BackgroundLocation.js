import React from 'react';
import ReactTooltip from 'react-tooltip';
import {maps} from '../icons';
import {useTranslation as i18n} from 'react-i18next';

export default function BackgroundLocation(props) {
  const {t} = i18n();
  const {showing, config} = props;
  const location = config(showing);
  const name = t(location.name) || t('location.unknown');
  const url = location.url;

  if (url) {
    return (
      <div>
        <a data-tip={t('location.tooltip', {location: name})} href={url} target="_blank" rel="noopener noreferrer">
          <img alt={name} src={maps} className="social-media" />
        </a>
        <ReactTooltip place="top" type="dark" effect="float"/>
      </div>
    )
  }

  return null;
}
