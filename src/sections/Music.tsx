import React, { useEffect, useState } from 'react';
import { ClickableImage, SectionContainer } from 'components';
import { z, fetchSpotifyInfo } from 'utils';
import { play } from 'icons';

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

interface TrackArtist {
  id: ID;
  name: string;
}

export interface Track {
  id: ID;
  album: Album;
  artists: TrackArtist[];
  name: string;
}

export function Music() {
  return (
    <SectionContainer>
      <TopArtists />
      {false && <TopTracks />}
    </SectionContainer>
  )
}

function TopArtists() {
  const {loading, artists} = useArtists();
  const titleMarkup = <h1>{loading ? 'Please wait...' : `My top ${artists.length} artists`}</h1>;
  const subtitleMarkup = loading
    ? <i>Did you know there are 2 species on Earth that like spicy food?</i>
    : <p>
      When I'm at work, I need tune in and listen to my favourite songs on Spotify.
        This is what I really enjoy listening at the moment.<br /><br />
      <i><u><b>Note</b></u>: Do you have Spotify installed? Click and open on Spotify!</i>
      </p>
  
  return (
    <div className={z`padding-bottom 40`}>
      {titleMarkup}
      {subtitleMarkup}
      <div className={z`display flex; flex-wrap wrap; justify-content space-around`}>
        {artists.map(artist => (
          <ClickableImage
            selectable
            rounded
            divideBy={13}
            width={300}
            height={300}
            title={artist.name}
            image={artist.img}
            description={artist.genres.join(', ') || 'N/A'}
            onClick={() => window.location.assign(`spotify:artist:${artist.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

function TopTracks() {
  const {loading, tracks} = useTracks();
  const titleMarkup = <h1>{loading ? 'Please wait...' : `My top ${tracks.length} tracks`}</h1>;
  const subtitleMarkup = loading
    ? <i>Did you know there are 2 species on Earth that like spicy food?</i>
    : null;
  
  return (
    <div className={z`padding-bottom 40`}>
      {titleMarkup}
      {subtitleMarkup}
      <div className={z`display divideBy; flex-wrap wrap; justify-content space-around`}>
        {tracks.map(track => (
          <ClickableImage
            selectable
            icon={play}
            divideBy={5}
            width={200}
            height={200}
            title={track.name}
            image={track.album.img}
            description={track.album.name || 'N/A'}
            onClick={() => window.location.assign(`spotify:track:${track.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

function useArtists() {
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    if (loading) return;

    setLoading(true);
    
    fetchSpotifyInfo('/top/artists')
      .then((artists: Artist[]) => {
        setArtists(artists);
      })
      .finally(() => setLoading(false));
  }, []);

  return {loading, artists};
}

function useTracks() {
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    if (loading) return;

    setLoading(true);
    
    fetchSpotifyInfo('/top/tracks')
      .then((tracks: Track[]) => {
        setTracks(tracks);
      })
      .finally(() => setLoading(false));
  }, []);

  return {loading, tracks};
}
