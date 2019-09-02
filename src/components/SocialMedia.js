import React from 'react';
import {Container} from 'bloomer';
import {github, linkedin, skype} from '../icons';


export default function SocialMedia() {
  return (
    <Container>
      <SocialMediaIcon
        icon={github}
        src="https://github.com/thedrummeraki"
        alt="thedrummeraki" />
      <SocialMediaIcon
        icon={linkedin}
        src="https://www.linkedin.com/in/akinyele-cafe-febrissy/"
        alt="akinyele-cafe-febrissy" />
      <SocialMediaIcon
        icon={skype}
        src="skype:aakin013"
        alt="aakin013" />
    </Container>
  );
}

function SocialMediaIcon(props) {
  return (
    <a href={props.src} target="_blank" rel="noopener noreferrer">
      <img alt={props.name || props.src} className="social-media" src={props.icon} />
    </a>
  )
}
