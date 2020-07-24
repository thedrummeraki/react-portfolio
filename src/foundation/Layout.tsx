import React, { ReactNode } from 'react';
import { z } from 'utils';
import { skype, github, linkedin } from 'icons';
import { useHistory, Link } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

interface ActionItem {
  url: string;
  icon: string;
}

interface NavigationProps {
  title: string;
}

export function MainLayout(props: Props) {
  return (
    <div className={z`
      display flex
      justify-content center
      align-items center
    `}>
      <NavigationBar />
      <main className={z`
        z-index 1
        display block
      `}>
        {props.children}
      </main>
    </div>
  );
}

export function ProjectLayout(props: Props) {
  return (
    <section className={z`
      width 100vw
    `}>
      {props.children}
    </section>
  );
}

function NavigationBar() {
  return (
    <NavigationHeader>
      <NavigationWrapper>
        <NavigationContainer>
          <NavigationDisplay title={'Akinyele Cafe-Febrissy'} />
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

function NavigationDisplay(props: NavigationProps) {
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
        <NavigationLeft />
      </div>
    </div>
  )
}

function NavigationTitle(props: {title: string}) {
  const history = useHistory();

  return (
    <div className={z`
      flex-grow 0
      flex-shrink 0
      backface-visibility hidden
    `}>
      <div onClick={() => history.push('/')} className={z`
        margin 0
        font-size 1.75em
        color #fff
      `}>
        <span>{props.title}</span>
      </div>
    </div>
  )
}

function NavigationLeft() {
  return (
    <div className={z`
      text-align right
      margin-left auto
    `}>
      <div className={z`pointer-events auto`}>
        <NavigationList />
      </div>
    </div>
  )
}

function NavigationList() {
  return (
    <div className={z`
      justify-content flex-end
      display inline-flex
      flex-wrap wrap
    `}>
      <NavigationItem title='My work' url='/projects' />
      <NavigationItem hidden external title='Travelling' url='http://japan.akinyele.ca' />
    </div>
  )
}

function NavigationItem(props: {title: string, url: string, hidden?: boolean; external?: boolean}) {
  const {title, url, hidden, external} = props;

  const linkMarkup = (
    external
      ? (
        <span className={z`color #fff; cursor pointer;`} onClick={() => window.open(url, '_blank')}>
          <u>{title}</u>
        </span>
      )
      : <Link className={z`color #fff;`} to={url}>{title}</Link>
  );

  if (hidden) {
    return null;
  }
  
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
      {linkMarkup}
    </div>  
  )
}

function NavigationActions() {
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
    `}>
      <NavigationActionItems items={[
        {icon: github, url: 'https://github.akinyele.ca'},
        {icon: linkedin, url: 'https://linkedin.akinyele.ca'},
        {icon: skype, url: 'skype:aakin013'}
      ]} />
    </div>
  )
}

function NavigationActionItems(props: {items: ActionItem[]}) {
  return (
    <div className={z`
      margin 0
      display flex
    `}>
      {props.items.map(item => <NavigationActionItem item={item} />)}
    </div>
  )
}

function NavigationActionItem(props: {item: ActionItem}) {
  const {item: {url, icon}} = props;
  return (
    <span
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
      `}
      onClick={() => window.open(url, '_blank')}>
      <img alt={url} src={icon} />
    </span>
  );
}
