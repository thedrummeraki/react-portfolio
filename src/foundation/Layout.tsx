import React, { ReactNode, useContext } from 'react';
import { z, useImageLoaded } from 'utils';
import { skype, github, linkedin, email, myFace, spotify, spotifyOffline } from 'icons';
import { Link } from 'components';
import { puffLoader } from 'anim';
import { CurrentTrackContext } from './EntryPoint';

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

type ComposedProps = Props & NavigationProps;
type AnyComposedProps = ComposedProps & AnyProps;

export function MainLayout(props: ComposedProps) {
  document.title = "Welcome ~ Akinyele Cafe-Febrissy";

  return (
    <div className={z`
      display flex
      justify-content center
      align-items center
    `}>
      <NavigationBar {...props} />
      <main className={z`
        z-index 1
        display block
      `}>
        {props.children}
      </main>
    </div>
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

  return (
    <div className={z`
      display flex
      justify-content center
      align-items center
    `}>
      <NavigationBar {...props} />
      <main className={z`
        z-index 1
        display block
      `}>
        {props.children}
      </main>
    </div>
  );
}

function NavigationBar(props: Props & NavigationProps) {
  return (
    <NavigationHeader>
      <NavigationWrapper>
        <NavigationContainer>
          <NavigationDisplay {...props} />
          <NavigationActions />
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

function NavigationDisplay(props: NavigationProps & Props) {
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

function NavigationTitle(props: {title: string}) {
  const imageLoaded = useImageLoaded(myFace);
  const logo = imageLoaded ? myFace : puffLoader;
  const currentTrack = useContext(CurrentTrackContext).track;
  const subtitle = currentTrack && currentTrack.artists
    ? <span><b>Listening to</b> {currentTrack.name} by {currentTrack.artists.join(', ')}</span>
    : null;

  return (
    <div className={z`
      flex-grow 0
      flex-shrink 0
      backface-visibility hidden
      user-select none
    `}>
      <Link to='/' className={z`
        margin 0
        font-size 1.75em
        color #fff
      `}>
        <div className={z`display flex; align-items center`}>
          <img alt='Akinyele C.F.' className={z`border-radius 100%; width 30; height 30; margin-right 10`} src={logo} />
          <TitleWithSubtitle title={props.title} subtitle={subtitle} />
        </div>
      </Link>
    </div>
  )
}

function TitleWithSubtitle(props: {title: string, subtitle?: ReactNode}) {
  const {title, subtitle} = props;

  if (subtitle) {
    return (
      <div className={z`display inline-grid`}>
        <span className={z`font-size 0.8em; margin-bottom 5`}>{title}</span>
        <small className={z`font-size 0.5em`}>{subtitle}</small>
      </div>
    );
  }

  return <span>{title}</span>
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

function NavigationActions() {
  const items: ActionItem[] = [
    { icon: github, url: 'https://github.akinyele.ca' },
    { icon: linkedin, url: 'https://linkedin.akinyele.ca' },
    { icon: skype, url: 'skype:aakin013' },
    { icon: email, url: 'mailto:me@akinyele.ca' }
  ];

  const currentTrackInfo = useContext(CurrentTrackContext);
  if (currentTrackInfo.track) {
    const icon = currentTrackInfo.track.artists ? spotify : spotifyOffline;
    items.splice(0, 0, {icon: icon, url: '/music', sameTab: true});
  }

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
