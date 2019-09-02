import React from 'react';
import {
  NavItem
} from 'bloomer';
import {language} from '../icons';
import {useTranslation as i18n} from 'react-i18next';
import ReactTooltip from 'react-tooltip';

export default function TranslationButtons(props) {
  const {t} = i18n();

  return(
    <div className="inline">
      <a href="#" data-tip={t('language.change')} className="language">
        <img alt="lang-switch" src={language} className="social-media" />
      </a>
      <ReactTooltip place="left" type="dark" effect="float"/>
    </div>
  );
}

function EnglishButton(props) {
  const {changeLanguage} = props;
  return(
    <NavItem>
      <button
        className="button"
        tag="en"
        onClick={() => {changeLanguage('en')}}
        >
          English
      </button>
    </NavItem>
  );
}

function FrenchButton(props) {
  const {changeLanguage} = props;
  return (
    <NavItem>
      <button
        className="button"
        tag="fr"
        onClick={() => {changeLanguage('fr')}}
        >
          Français
      </button>
    </NavItem>
  );
}

function JapaneseButton(props) {
  const {changeLanguage} = props;
  return (
    <NavItem>
      <button
        className="button"
        tag="ja"
        onClick={() => {changeLanguage('ja')}}
        >
          日本語
      </button>
    </NavItem>
  );
}
