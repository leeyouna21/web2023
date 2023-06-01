import React from 'react';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import SliderSection from './components/session/SliderSection';
import IntroSection from './components/session/IntroSection';
import MemberSection from './components/session/MemberSection';
import PortSection from './components/session/PortSection';
import YoutubeSection from './components/session/YoutubeSection';
import UnsplashSection from './components/session/UnsplashSection';
import MovieSection from './components/session/MovieSection';
import ReviewSection from './components/session/ReviewSection';
import Footer from './components/layout/FooterSection';

function App() {
  return (
    <>
      <Header attr={'header__wrap SBAggro3 bg-beige'} />
      <Main>
        <SliderSection attr={'slider__wrap SBAggro3 section '} />
        <IntroSection attr={'intro__wrap SBAggro3  section bg-ivory'} />
        <MemberSection attr={'member__wrap SBAggro3 center section'} />
        <PortSection attr={'port__wrap SBAggro3  center section bg-ivory'} />
        <YoutubeSection attr={'youtube__wrap SBAggro3  section  bg-white02'} />
        <UnsplashSection attr={'unsplash__wrap SBAggro3 section bg-white'} />
        <MovieSection attr={'movies__wrap SBAggro3 section bg-white02'} />
        <Footer attr={'footer__wrap SBAggro3 section bg-ivory'} />
      </Main>
      <ReviewSection />
    </>
  );
}

export default App;
