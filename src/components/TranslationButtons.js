import React, {useCallback, useRef} from 'react';
import {language} from '../icons';
import {useTranslation as i18n} from 'react-i18next';
import ReactTooltip from 'react-tooltip';

import {locale} from '../icons';

export default function TranslationButtons(props) {
  const {t} = i18n();
  const translationsRef = useRef();

  const onTranslationsClick = useCallback(() => {
    if (translationsRef.current) {
      translationsRef.current.classList.toggle('showing');
    }
  }, [translationsRef]);

  return(
    <div className="inline">
      <div ref={translationsRef} className="locales">
        <LanguageButton 
          lang='en'
          callback={onTranslationsClick}
          {...props} 
          />
        <LanguageButton 
          lang='fr'
          callback={onTranslationsClick}
          {...props} 
          />
        <LanguageButton 
          lang='ja'
          callback={onTranslationsClick}
          {...props} 
          />
      </div>

      <a href="#" onClick={onTranslationsClick}className="language">
        <img alt="lang-switch" src={language} className="social-media" />
      </a>
    </div>
  );
}

function LanguageButton(props) {
  const {changeLanguage, selected, lang, callback} = props;
  const isSelected = selected === lang;
  const selectedClass = isSelected ? 'inactive' : '';
  return(
    <div 
      className="inline" 
      onClick={() => {
        if (isSelected) {
          return;
        }
        changeLanguage(lang);
        callback();
      }}>
      <img className={`${selectedClass}`} alt={lang} src={locale[lang]} />
    </div>
  );
}
