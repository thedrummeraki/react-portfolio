import React from 'react';

export default function Link(props) {
  const {newTab} = props;

  if (newTab) {
    return (
      <NewTabLink {...props} />
    )
  }
  return (
    <NormalLink {...props} />
  );
}

function NewTabLink(props) {
  return (
    <a rel="noopener noreferrer" target="_blank" {...props}>
      {props.children}
    </a>
  );
}

function NormalLink(props) {
  return (
    <a {...props}>
      {props.children}
    </a>
  );
}
