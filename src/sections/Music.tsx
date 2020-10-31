import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ClickableImage, SectionContainer } from 'components';
import { z } from 'utils';

type ID = string;
type Genre = string;

export interface Artist {
  id: ID;
  name: string;
  img: string;
  genres: Genre[];
}

export interface Album {
  id: ID;
  name: string;
  img: string;
}

export interface Track {
  id: ID;
  album: Album;
  artists: string[];
  name: string;
}

export function Music() {
  const history = useHistory();
  const {loading, artists} = useArtists();
  const subtitleMarkup = loading
    ? <i>Did you know there are 2 species on Earth that like spicy food?</i>
    : <p>
      When I'm at work, I need tune in and listen to my favourite songs on Spotify.
        This is what I really enjoy listening at the moment.<br /><br />
      <i><u><b>Note</b></u>: Do you have Spotify installed? Click and open on Spotify!</i>
      </p>

  return (
    <SectionContainer title={loading ? 'Please wait...' : `My top ${artists.length} artists`}>
      {subtitleMarkup}
      <div className={z`display flex; flex-wrap wrap; justify-content space-around`}>
        {artists.map(artist => (
          <ClickableImage
            flex={19}
            width={200}
            height={200}
            title={artist.name}
            image={artist.img}
            description={artist.genres.join(', ') || 'N/A'}
            onClick={() => window.location.assign(`spotify:artist:${artist.id}`)}
          />
        ))}
      </div>
    </SectionContainer>
  )
}

function useArtists() {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    fetch('https://music-akinyele-api.herokuapp.com/top/artists')
      .then(response => response.json())
      .then((artists: Artist[]) => {
        setArtists(artists);
      })
      .finally(() => setLoading(false));
  }, []);

  return {loading, artists};
}
