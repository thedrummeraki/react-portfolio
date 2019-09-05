import React, {useCallback, useRef} from 'react';
import {language} from '../icons';

import {locale} from '../icons';

export default function TranslationButtons(props) {
  const translationsRef = useRef();

  const onTranslationsClick = useCallback((e) => {
    if (e) {
      e.preventDefault();
    }
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

      <div onClick={onTranslationsClick}className="language">
        <img alt="lang-switch" src={language} className="social-media" />
      </div>
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
