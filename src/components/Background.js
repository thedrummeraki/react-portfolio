import React from 'react';

export default function Background(props) {
  const {showing, from, to} = props;
  setBackgroundIds(from, to);

  const backgrounds = document.backgroundIds.map(bgId => {
    const showingTag = bgId === showing ? ' showing' : '';
    return (
      <div 
        className={`bg img bg${bgId}${showingTag}`}
        key={bgId}
      ></div>
    )
  });

  return (
    <div className="bg">
      {backgrounds}
    </div>
  );
}

function setBackgroundIds(from, to) {
  if (!document.backgroundIds) {
    const backgroundIds = [];
    for (var i = from; i < to; i++) {
      backgroundIds.push(i);
    }
    document.backgroundIds = shuffle(backgroundIds);
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
