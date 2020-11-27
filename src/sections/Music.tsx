import React, { useContext, useEffect, useState } from 'react';
import { ClickableImage, SectionContainer } from 'components';
import { z, fetchSpotifyInfo } from 'utils';
import { play } from 'icons';
import { CurrentTrackContext } from 'foundation';

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
      {<TopTracks />}
    </SectionContainer>
  )
}

function TopArtists() {
  const {loading, artists} = useArtists();
  const titleMarkup = <h1>{loading ? 'Please wait...' : `My top ${artists.length} artists`}</h1>;
  const subtitleMarkup = loading
    ? <i>Did you know there are 2 species on Earth that like spicy food?</i>
    : <p>
        <i><u><b>Note</b></u>: Clicking will redirect you to <u>open.spotify.com</u>.</i>
      </p>

  const currentTrack = useContext(CurrentTrackContext).track;
  const currentArtists = (currentTrack && currentTrack.artists) || [];
  
  return (
    <div className={z`padding-bottom 40`}>
      {titleMarkup}
      {subtitleMarkup}
      <div className={z`display flex; flex-wrap wrap; justify-content space-around`}>
        {artists.map(artist => {
          const playing = currentArtists.filter(a => a.id === artist.id).length > 0 || undefined;

          return (
            <ClickableImage
              selectable
              rounded
              icon={playing && play}
              divideBy={5}
              width={225}
              height={225}
              title={artist.name}
              titleColor={playing && '#00D95F'}
              image={artist.img}
              description={artist.genres.join(', ') || 'N/A'}
              onClick={() => openSpotifyLink(artist, 'artist')}
            />
          )
        })}
      </div>
    </div>
  );
}

function TopTracks() {
  const {loading, tracks} = useTracks(48);
  const currentTrack = useContext(CurrentTrackContext).track;

  const titleMarkup = <h1>{loading ? 'Please wait...' : `My top ${tracks.length} tracks`}</h1>;
  const subtitleMarkup = loading
    ? <i>Did you know there are 2 species on Earth that like spicy food?</i>
    : null;
  
  return (
    <div className={z`padding-bottom 40`}>
      {titleMarkup}
      {subtitleMarkup}
      <div className={z`display flex; flex-wrap wrap; justify-content space-around`}>
        {tracks.map(track => {
          var trackPlaying = (currentTrack && currentTrack.id === track.id) || undefined;

          return (
            <ClickableImage
              selectable
              roundedBorders
              icon={trackPlaying && play}
              divideBy={6}
              width={225}
              height={225}
              title={track.name}
              titleColor={trackPlaying && '#00D95F'}
              image={track.album.img}
              description={track.album.name || 'N/A'}
              onClick={() => openSpotifyLink(track, 'track')}
            />
          )
        })}
      </div>
    </div>
  );
}

function openSpotifyLink(resource: Album | Artist | Track, type: string) {
  // var now = new Date().valueOf();
  // setTimeout(function () {
  //   const then = new Date().valueOf();
  //   if (then - now > 100) return;

  //   console.log(then, now, (then - now));
    window.location.assign(
      `https://open.spotify.com/${type}/${resource.id}`,
    );
  // }, 25);
  // window.location.assign(`spotify:${type}:${resource.id}`);
}

function useArtists() {
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState<Artist[]>([]);

  const fetchArtists = () => {
    if (loading) return;

    setLoading(true);

    fetchSpotifyInfo('/top/artists')
      .then((artists: Artist[]) => {
        setArtists(artists || []);
      })
      .catch(e => console.error('error', e))
      .finally(() => setLoading(false));
  };

  useEffect(fetchArtists, []);

  return {loading, artists};
}

function useTracks(topTracks: number) {
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([]);

  const fetchTracks = () => {
    if (loading) return;

    setLoading(true);

    fetchSpotifyInfo(`/top/tracks?top_tracks=${topTracks}`)
      .then((tracks: Track[]) => {
        setTracks(tracks);
      })
      .catch(e => console.error('error', e))
      .finally(() => setLoading(false));
  };

  useEffect(fetchTracks, []);

  return {loading, tracks};
}
