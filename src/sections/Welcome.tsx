import React, { ReactNode, useState, useEffect } from 'react';
import { z } from 'utils';
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
  //const history = useHistory();
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
              <span className={z`font-size 400%;`}>
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
    return null;
  }

  return (
    <div className={z`display grid; font-size 300%`}>
      <FadeIn fadeIn={1}>
        <span className={z`margin 20;`}>
          I believe in:
        </span>
      </FadeIn>
      <FadeIn fadeIn={2}>
        <ReactTypewriter
          speed={100}
          typingDelay={100}
          eraseDelay={1000}
          text={[
            'Forward thinking',
            'Quality and trust',
            'Long-term oriented',
            'Constant learning',
            'Continuous improvement',
          ]}
        />
      </FadeIn>
    </div>
  );
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
