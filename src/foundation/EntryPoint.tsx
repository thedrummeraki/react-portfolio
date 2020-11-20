import React, { useEffect, useState } from 'react';
import { MainRoutes, ProjectRoutes, MusicRoutes } from 'foundation';
import { BrowserRouter } from 'react-router-dom';
import { Track } from 'sections/Music';
import { useInterval, fetchSpotifyInfo } from 'utils';

interface PlayingState {
  track: Track|null;
  loading: boolean;
}

export const CurrentTrackContext = React.createContext<PlayingState>({track: null, loading: true});
export const ShowCurrentTrackContext = React.createContext(false);

export function EntryPoint() {
  const trackInto = useCurrentTrack();

  return (
    <CurrentTrackContext.Provider value={trackInto}>
      <BrowserRouter>
        <MainRoutes />
        <ShowCurrentTrackContext.Provider value={true}>
          <MusicRoutes />
        </ShowCurrentTrackContext.Provider>
        <ProjectRoutes />
      </BrowserRouter>
    </CurrentTrackContext.Provider>
  )
}

function useCurrentTrack() {
  const [track, setTrack] = useState<Track|null>(null);
  const [loading, setLoading] = useState(false);

  const checkCurrentTrack = () => {
    if (loading) return;

    setLoading(true);

    fetchSpotifyInfo('playing/now')
      .then((track: Track) => {
        setTrack(track);
      })
      .finally(() => setLoading(false));
  };

  useEffect(checkCurrentTrack, []);
  useInterval(checkCurrentTrack, 1000);

  return {loading, track};
}
