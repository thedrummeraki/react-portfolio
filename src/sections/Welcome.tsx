import React from 'react';
import { z } from 'utils';
import { useHistory } from 'react-router-dom';

export function Welcome() {
  return <LoadedContent />
};

function LoadedContent() {
  const history = useHistory();

  return (
    <div className={z`cursor pointer; user-select none`} onClick={() => history.push('/projects')}>
      <span className={z`color white; font-size 400%`}>View my Work</span>
    </div>
  )
}
