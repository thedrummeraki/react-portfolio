import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { z, useImageLoaded, fetchSpotifyInfo, useInterval } from 'utils';
import { skype, github, linkedin, email, myFace, spotify, spotifyOffline } from 'icons';
import { Link } from 'components';
import { puffLoader } from 'anim';
import { Track } from 'sections/Music';
import { ShowCurrentTrackContext } from './EntryPoint';

interface PlayingState {
  track: Track|null;
  loading: boolean;
}

interface Props {
  children?: ReactNode;
  activeFor?: string;
}

interface ActionItem {
  url: string;
  icon: string;
  sameTab?: boolean;
}

interface NavigationProps {
  title: string;
}

interface AnyProps {
  for: string;
}

interface WithPlayingStateProps {
  currentTrackInfo: PlayingState;
}

type ComposedProps = Props & NavigationProps;
type AnyComposedProps = ComposedProps & AnyProps;

interface PlayingState {
  track: Track|null;
  loading: boolean;
}

export const CurrentTrackContext = React.createContext<PlayingState>({track: null, loading: true});

export function MainLayout(props: ComposedProps) {
  document.title = "Welcome ~ Akinyele Cafe-Febrissy";
  const currentTrackInfo = useCurrentTrack();

  return (
    <CurrentTrackContext.Provider value={currentTrackInfo}>
      <div className={z`
        display flex
        justify-content center
        align-items center
      `}>
        <NavigationBar {...props} currentTrackInfo={currentTrackInfo} />
        <main className={z`
          z-index 1
          display block
        `}>
          {props.children}
        </main>
      </div>
    </CurrentTrackContext.Provider>
  );
}

export function ProjectLayout(props: ComposedProps) {
  return (
    <AnyLayout for="Projects" {...props}>
      {props.children}
    </AnyLayout>
  )
}

export function AnyLayout(props: AnyComposedProps) {
  document.title = `${props.for} ~ Akinyele Cafe-Febrissy`;
  const currentTrackInfo = useCurrentTrack();

  return (
    <CurrentTrackContext.Provider value={currentTrackInfo}>
      <div className={z`
        display flex
        justify-content center
        align-items center
      `}>
        <NavigationBar {...props} currentTrackInfo={currentTrackInfo} />
        <main className={z`
          z-index 1
          display block
        `}>
          {props.children}
        </main>
      </div>
    </CurrentTrackContext.Provider>
  );
}

function NavigationBar(props: Props & NavigationProps & WithPlayingStateProps) {

  return (
    <NavigationHeader>
      <NavigationWrapper>
        <NavigationContainer>
          <NavigationDisplay {...props} />
          <NavigationActions {...props} />
        </NavigationContainer>
      </NavigationWrapper>
    </NavigationHeader>
  )
}

function NavigationHeader(props: Props) {
  return (
    <header className={z`
      position absolute
      z-index 10
      top 0; right 0; left 0;
      line-height 1
      pointer-events none
      display block
    `}>
      {props.children}
    </header>
  )
}

function NavigationWrapper(props: Props) {
  return (
    <div className={z`
      position relative
      z-index 2
      width 100%
      box-sizing border-box
      padding 2vw
      pointer-events auto
    `}>
      {props.children}
    </div>
  )
}

function NavigationContainer(props: Props) {
  return (
    <div className={z`
      position relative
      display flex
      align-items center
      width 100%
      height inherit
    `}>
      {props.children}
    </div>
  )
}

function NavigationDisplay(props: NavigationProps & Props & WithPlayingStateProps) {
  return (
    <div className={z`
      position relative
      display flex
      width 100%
      box-sizing border-box
      justify-content flex-start
      align-items center
    `}>
      <div className={z`
        display flex
        flex-wrap nowrap
        flex 1 0 67%
        align-items center
      `}>
        <NavigationTitle {...props} />
        <NavigationLeft {...props} />
      </div>
    </div>
  )
}

function NavigationTitle(props: NavigationProps & WithPlayingStateProps) {
  const imageLoaded = useImageLoaded(myFace);
  const logo = imageLoaded ? myFace : puffLoader;
  const currentTrack = props.currentTrackInfo.track;
  const showCurrentTrack = useContext(ShowCurrentTrackContext);

  const trackMarkup = (
    <span>
      {currentTrack && (
        <Link external to={`https://open.spotify.com/track/${currentTrack.id}`}>
          <u>{currentTrack.name}</u>
        </Link>
      )}
    </span>
  )

  const artistsMarkup = (
    <span>
      {currentTrack && currentTrack.artists && currentTrack.artists.map<React.ReactNode>(artist => (
        <Link external to={`https://open.spotify.com/artist/${artist.id}`}>
          <u>{artist.name}</u>
        </Link>
      )).reduce((prev, curr) => [prev, ', ', curr])}</span>
  );

  const subtitle = showCurrentTrack && currentTrack && currentTrack.artists
    ? <span><b>Listening to</b> {trackMarkup} <b>by</b> {artistsMarkup}</span>
    : null;

  return (
    <div className={z`
      flex-grow 0
      flex-shrink 0
      backface-visibility hidden
      user-select none
    `}>
      <div className={z`
        margin 0
        font-size 1.75em
        color #fff
      `}>
        <div className={z`display flex; align-items center`}>
          <Link to='/'>
            <img alt='Akinyele C.F.' className={z`border-radius 100%; width 30; height 30; margin-right 10`} src={logo} />
          </Link>
          <TitleWithSubtitle title={props.title} subtitle={subtitle} />
        </div>
      </div>
    </div>
  )
}

function TitleWithSubtitle(props: {title: string, subtitle?: ReactNode}) {
  const {title, subtitle} = props;

  if (subtitle) {
    return (
      <div className={z`display inline-grid`}>
        <Link to='/'>
          <span className={z`font-size 0.8em; margin-bottom 5`}>{title}</span>
        </Link>
        <small className={z`font-size 0.5em`}>{subtitle}</small>
      </div>
    );
  }

  return <Link to='/'><span>{title}</span></Link>
}

function NavigationLeft(props: Props) {
  return (
    <div className={z`
      text-align right
      margin-left auto
    `}>
      <div className={z`pointer-events auto`}>
        <NavigationList {...props} />
      </div>
    </div>
  )
}

function NavigationList(props: Props) {
  const {activeFor} = props;

  return (
    <div className={z`
      justify-content flex-end
      display inline-flex
      flex-wrap wrap
    `}>
      <NavigationItem active={activeFor === 'projects'} title='My work' url='/projects' />
      <NavigationItem external title='Resume' url='https://resume.akinyele.ca' />
      <NavigationItem hidden external title='Travelling' url='http://japan.akinyele.ca' />
    </div>
  )
}

function NavigationItem(props: {title: string, url: string, hidden?: boolean; external?: boolean, active?: boolean}) {
  const {title, url, hidden, external, active} = props;

  if (hidden) {
    return null;
  }

  const activeClass = `
    transition all 0.5s ease
    :after {
      display block
      content ''
      border-bottom solid 1px #fff;
      transform scaleX(0)
      transition transform 250ms ease-in-out
    }
    :hover:after { transform scaleX(1); }
  `;
  
  return (
    <div className={z`
      white-space nowrap
      font-size 1rem

      font-weight 300
      font-style normal
      letter-spacing 0em
      text-transform none
      line-height 1.8em

      padding-left 10
      padding-bottom 20
    `}>
      <Link
        external={external}
        active={active}
        className={z`color #fff; ${!active && activeClass}`}
        to={url}
      >
        {title}
      </Link>
    </div>  
  )
}

function NavigationActions(props: WithPlayingStateProps) {
  const currentTrackInfo = props.currentTrackInfo;
  const currentTrack = currentTrackInfo.track;
  const spotifyIcon = currentTrack && currentTrack.artists ? spotify : spotifyOffline;

  const items: ActionItem[] = [
    { icon: spotifyIcon, url: '/music', sameTab: true },
    { icon: github, url: 'https://github.akinyele.ca' },
    { icon: linkedin, url: 'https://linkedin.akinyele.ca' },
    { icon: skype, url: 'skype:aakin013' },
    { icon: email, url: 'mailto:me@akinyele.ca' }
  ];

  return (
    <div className={z`
      margin-right 0
      justify-content flex-end
      flex-grow 0
      flex-shrink 1
      display inline-flex
      align-items center
      pointer-events auto
      line-height 1
      font-size calc(0vw + 1rem)
      user-select none
    `}>
      <NavigationActionItems items={items} />
    </div>
  )
}

function NavigationActionItems(props: {items: ActionItem[]}) {
  return (
    <div className={z`
      margin 0
      display flex
    `}>
      {props.items.map(item => <NavigationActionItem key={item.url} item={item} />)}
    </div>
  )
}

function NavigationActionItem(props: {item: ActionItem}) {
  const {item: {url, icon, sameTab}} = props;
  return (
    <Link
      to={url}
      external={!sameTab}
      className={z`
        margin-left 1.5vw
        width 20
        height 20
        position relative
        display block
        box-sizing content-box
        line-height 1
        color inherit
        cursor pointer
        background transparent
        padding-bottom 20
      `}>
      <img alt={url} src={icon} />
    </Link>
  );
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
