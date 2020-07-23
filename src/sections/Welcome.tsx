import React, { ReactNode } from 'react';
import { z } from 'utils';
import Typewriter from 'react-typing-effect';


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
  //const [currentlyHovered, setCurrentlyHovered] = useState(false);
  /*const onMouseEnter = () => {
    setCurrentlyHovered(true);
  };
  const onMouseExit = () => {
    setCurrentlyHovered(false);
  };*/

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
            <div className={z`color white;`}>
              <span className={z`font-size 400%`}>{punchline}</span>
              <div className={z`display grid; font-size 300%`}>
                <span className={z`margin 20;`}>
                  I believe in:
                </span>
                <Typewriter
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
              </div>
            </div>
          </div>
        </Background>
      </div>
    </div>
  )
}

function Background(props: BackgroundProps) {
  const {url, /*hovered, */ children} = props;
  //const opacity = hovered ? '0.3' : '0.6';

  return (
    <>
      <div className={z`
        top 0; bottom 0; left 0; right 0
        position absolute
        width 100%
        height 100%
        background url('${url}') no-repeat center/cover
        transition opacity 0.3s ease-in-out
        opacity 0.4
      `}>
      </div>
      {children}
    </>
  );
}
