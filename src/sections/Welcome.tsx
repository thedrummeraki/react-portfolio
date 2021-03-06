import React, { ReactNode, useState, useEffect } from 'react';
import { z, shuffled, useImageLoaded } from 'utils';
import ReactTypewriter from 'react-typing-effect';
import { FadeIn, Link } from 'components';
import facts from '175-fun-facts';


interface BackgroundProps {
  url: string;
  hovered: boolean;
  children: ReactNode;
}

export function Welcome() {
  return (
    <LoadedContent 
      punchline="Hi, my name is Akinyele!"
      iBelieveIn={shuffled([
        'Forward thinking',
        'Quality and trust',
        'Long-term solutions',
        'Constant learning',
        'Continuous improvement',
        'Being honest',
        'Beign upfront',
        'Collaboration',
      ])} />
  )
};

function LoadedContent(props: {punchline: string, iBelieveIn: string[]}) {
  const {punchline, iBelieveIn} = props;

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
              heigh 100vh
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
              <MyBeliefs iBelieveIn={iBelieveIn} />
            </FadeIn>
          </div>
        </Background>
      </div>
    </div>
  )
}

function MyBeliefs(props: {iBelieveIn: string[]}) {
  const [visible, setVisible] = useState(false);
  const {iBelieveIn} = props;
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => {
      timeout && clearTimeout(timeout);
    }
  }, []);

  if (!visible) {
    return <div className={z`margin 206`}></div>;
  }

  return (
    <>
    <div className={z`display grid; margin 20 0; font-size 300%`}>
      <FadeIn fadeIn={1}>
        <span className={z`margin 20;`}>
          <u>I believe in:</u>
        </span>
      </FadeIn>
      <FadeIn fadeIn={2}>
        <code>
          <ReactTypewriter
            speed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursor={'_'}
            text={iBelieveIn}
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
        font-size 2rem
        cursor pointer
      `}>
        <Link to='/projects'>
          <small className={z`
            background #0000006a
            padding 2 10
            transition all 0.5s ease
            :hover { background #000 }
          `}>
            <code>~/$ see-my-work --now &#62;</code>
          </small>
        </Link>
      </span>
      <LearnSomethingNew />
    </FadeIn>
  )
}

function Background(props: BackgroundProps) {
  const {url, children} = props;
  const loaded = useImageLoaded(url);

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

function LearnSomethingNew() {
  const [currentFact, setCurrentFact] = useState('');
  const [showingFact, setShowingFact] = useState(false);

  const learnSomethingNew = () => {
    setCurrentFact(getRandomFact());
    setShowingFact(true);
  };

  return (
    <div className={z`margin 2rem`}>
      <span onClick={learnSomethingNew} className={z`cursor pointer;`}>
        {!showingFact && <strong>Click to learn something new!</strong>}
        {showingFact && <u>Refresh!</u>}
      </span>
      {showingFact &&
        <FadeIn fadeIn={0.5}>
          <footer className={z`display flex; width 100%;`}>
            <p className={z`text-align center; width 100%;`}>
              <strong>Did you know?</strong><br />
              {<span dangerouslySetInnerHTML={{__html: currentFact}} />}
            </p>
          </footer>
        </FadeIn>
      }
    </div>
  )
}

function getRandomFact() {
  return facts[Math.floor(Math.random() * facts.length)];
}
