import React from 'react';
import Main from '../layout/Main';

import SliderSection from '../section/SliderSection';
import IntroSection from '../section/IntroSection';
import MemberSection from '../section/MemberSection';
import PortSection from '../section/PortSection';
import YoutubeSection from '../section/YoutubeSection';
import UnsplashSection from '../section/UnsplashSection';
import MovieSection from '../section/MovieSection';

function Home() {
  return (
    <>
      <Main>
        <SliderSection attr={'slider__wrap SBAggro3 section '} />
        <IntroSection attr={'intro__wrap SBAggro3  section bg-ivory'} />
        <MemberSection attr={'member__wrap SBAggro3 center section'} />
        <PortSection attr={'port__wrap SBAggro3  center section bg-ivory'} />
        <YoutubeSection attr={'youtube__wrap SBAggro3  section  bg-white02'} />
        <UnsplashSection attr={'unsplash__wrap SBAggro3 section bg-white'} />
        <MovieSection attr={'movies__wrap SBAggro3 section bg-white02'} />
      </Main>
    </>
  );
}

export default Home;
