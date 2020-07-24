import React, { ReactNode, useState, useEffect } from 'react';
import { z, shuffled } from 'utils';
import ReactTypewriter from 'react-typing-effect';
import { FadeIn } from 'components';


interface BackgroundProps {
  url: string;
  hovered: boolean;
  children: ReactNode;
}

export function Welcome() {
  return (
    <LoadedContent 
      punchline="Hi, my name is Akinyele!" />
  )
};

function LoadedContent(props: {punchline: string}) {
  const {punchline} = props;

  return (
    <div className={z`width 100vw; height 100vh`}>
      <div className={z`
        display flex
        justify-content center
        align-items center
        width 100%
        height 100%
      `}>
        <Background hovered url={'/main-bg-2-edited.jpg'}>
          <div
            className={z`
              user-select none
              z-index 2
              display block
              width 50%
              max-width 900
              text-align center
            `}
          >
            <FadeIn fadeIn={5} className={z`color white;`}>
              <span className={z`
                font-size 4rem
              `}
              >
                {punchline}
              </span>
              <MyValues />
            </FadeIn>
          </div>
        </Background>
      </div>
    </div>
  )
}

function MyValues() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => {
      timeout && clearTimeout(timeout);
    }
  }, []);

  if (!visible) {
    return <div className={z`margin 225`}></div>;
  }

  return (
    <>
    <div className={z`display grid; margin 20 0; font-size 300%`}>
      <FadeIn fadeIn={1}>
        <span className={z`margin 20;`}>
          <u>My core values are:</u>
        </span>
      </FadeIn>
      <FadeIn fadeIn={2}>
        <code>
          <ReactTypewriter
            speed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursor={'_'}
            text={shuffled([
              'Forward thinking',
              'Quality and trust',
              'Long-term oriented',
              'Constant learning',
              'Continuous improvement',
              'Honest and Upfront',
            ])}
          />
        </code>
      </FadeIn>
    </div>
    <MyWork />
    </>
  );
}

function MyWork() {
  return (
    <FadeIn fadeIn={1}>
      <span className={z`
        font-size 3rem
        cursor pointer
        :hover { font-weight bold }
      `}>
        <small><code>~/$ see-my-work --now</code></small>
      </span>
    </FadeIn>
  )
}

function Background(props: BackgroundProps) {
  const {url, children} = props;
  const [loaded, setLoaded] = useState(false);

  const imageLoader = new Image();
  imageLoader.src = url;
  imageLoader.onload = () => setLoaded(true);

  if (loaded) {
    return (
      <>
        <FadeIn fadeIn={1} targetOpacity={0.4} className={z`
          top 0; bottom 0; left 0; right 0
          position absolute
          width 100%
          height 100%
          background url('${url}') no-repeat center/cover
        `}>
        </FadeIn>
        {children}
      </>
    );
  }

  return null;
}
