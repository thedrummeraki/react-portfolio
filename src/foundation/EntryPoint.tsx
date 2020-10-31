import React, { useEffect, useState } from 'react';
import { MainRoutes, ProjectRoutes, MusicRoutes } from 'foundation';
import { BrowserRouter } from 'react-router-dom';
import { Track } from 'sections/Music';
import { useInterval } from 'utils';

interface PlayingState {
  track: Track|null;
  loading: boolean;
}

export const CurrentTrackContext = React.createContext<PlayingState>({track: null, loading: true});

export function EntryPoint() {
  const trackInto = useCurrentTrack();

  return (
    <CurrentTrackContext.Provider value={trackInto}>
      <BrowserRouter>
        <MainRoutes />
        <MusicRoutes />
        <ProjectRoutes />
      </BrowserRouter>
    </CurrentTrackContext.Provider>
  )
}

function useCurrentTrack() {
  const [track, setTrack] = useState<Track|null>(null);
  const [loading, setLoading] = useState(true);

  const checkCurrentTrack = () => {
    fetch('https://music-akinyele-api.herokuapp.com/playing/now')
      .then(response => response.json())
      .then((track: Track) => {
        setTrack(track);
      })
      .finally(() => setLoading(false));
  };

  useEffect(checkCurrentTrack, []);
  useInterval(checkCurrentTrack, 30000);

  return {loading, track};
}
