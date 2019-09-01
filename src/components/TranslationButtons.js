import React from 'react';
import {
  NavItem
} from 'bloomer';

export default function TranslationButtons(props) {
  return(
    <div className="inline">
      <EnglishButton {...props} />
      <FrenchButton {...props} />
      <JapaneseButton {...props} />
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
