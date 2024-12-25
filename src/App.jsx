import { useEffect, useRef } from "react";
import Hero from "./components/Hero/Hero";
import Games from "./components/Games/Games";
import "./index.css";
import ScrollText from "./components/ScrollText/ScrollText";
import Footer from "./components/Footer/Footer";
import MarqueeLogos from "./components/MarqueeLogos/MarqueeLogos";
import About from "./components/About/About";

function App() {
  const cursorRef = useRef(null);
  const gamesRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const scrollToGames = () => {
    gamesRef.current.scrollIntoView();
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView();
  }

  const onTitleEnter = () => {
    cursorRef.current.classList.remove("cursor-default");
    cursorRef.current.classList.add("cursor-title");
  };

  const onTitleExit = () => {
    cursorRef.current.classList.remove("cursor-title");
    cursorRef.current.classList.add("cursor-default");
  };

  const onBrowseEnter = () => {
    cursorRef.current.classList.remove("cursor-default");
    cursorRef.current.classList.add("cursor-browse");
  };

  const onBrowseExit = () => {
    cursorRef.current.classList.remove("cursor-browse");
    cursorRef.current.classList.add("cursor-default");
  };

  const onGameCardEnter = () => {
    cursorRef.current.classList.remove("cursor-default");
    cursorRef.current.classList.add("cursor-gamecard");
  };

  const onGameCardExit = () => {
    cursorRef.current.classList.remove("cursor-gamecard");
    cursorRef.current.classList.add("cursor-default");
  };

  const onSubscribeEnter = () => {
    cursorRef.current.classList.remove("cursor-default");
    cursorRef.current.classList.add("cursor-subscribe");
  };

  const onSubscribeExit = () => {
    cursorRef.current.classList.remove("cursor-subscribe");
    cursorRef.current.classList.add("cursor-default");
  };

  const onLinkEnter = () => {
    cursorRef.current.classList.remove("cursor-default");
    cursorRef.current.classList.add("cursor-link");
  };

  const onLinkExit = () => {
    cursorRef.current.classList.remove("cursor-link");
    cursorRef.current.classList.add("cursor-default");
  };

  return (
    <>
      <div className="cursor cursor-default" ref={cursorRef}>
        <img className="cursor-steam" src="/openSteam.svg" />
      </div>
      <Hero
        onTitleEnter={onTitleEnter}
        onTitleExit={onTitleExit}
        onBrowseEnter={onBrowseEnter}
        onBrowseExit={onBrowseExit}
        scrollToGames={scrollToGames}
        onLinkEnter={onLinkEnter}
        onLinkExit={onLinkExit}
      />
      {/* <ScrollText onTitleEnter={onTitleEnter} onTitleExit={onTitleExit} /> */}
      <div ref={aboutRef}/>
      <About />
      <MarqueeLogos />
      <div ref={gamesRef} />
      <Games
        onGameCardEnter={onGameCardEnter}
        onGameCardExit={onGameCardExit}
      />
      <Footer
        onSubscribeEnter={onSubscribeEnter}
        onSubscribeExit={onSubscribeExit}
        onLinkEnter={onLinkEnter}
        onLinkExit={onLinkExit}
        scrollToAbout={scrollToAbout}
      />
      <div className="cursor-preloading">
        <div className="cursor-gamecard" />
        <div className="cursor-browse" />
      </div>
    </>
  );
}

export default App;
