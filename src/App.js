import { faCamera, faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

// import "./App.scss";

import Icon from "./Components/Icon";
import Brand from "./Components/Brand";

import ytLogoImg from "./images/yt-logo.svg";
import ytVideo1 from "./videos/C-BooL - Golden Rules (Official Video).webm";

function App() {
  const videoRef = useRef();
  const videoProgressRef = useRef();
  const asideRef = useRef();

  const [videoProgress, setVideoProgress] = useState(0);
  const [videoPlay, setVideoPlay] = useState(false);
  const [asideActive, setAsideActive] = useState(0);

  const handleTimeUpdate = (e) => {
    const progress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;

    setVideoProgress(progress);
  };

  useEffect(() => {
    if (videoPlay) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [videoPlay]);

  useEffect(() => {
    if (asideActive) {
      if (asideActive === 1) {
        asideRef.current.classList.add("show");
        setAsideActive(2);
      } else {
        asideRef.current.classList.add("active");
      }
    } else {
      asideRef.current.classList.remove("active");
    }
  }, [asideActive]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-start">
          <Icon
            icon="hamburger"
            className="navbar-hamburger"
            onClick={() => setAsideActive(1)}
          />

          <Brand className="navbar-logo" />
        </div>
        <div className="navbar-mid">
          <div className="navbar-search">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
            ></input>
            <label className="search-label">
              <Icon icon="search" />
            </label>
          </div>

          <Icon icon="mic" className="navbar-mic" />
        </div>
        <div className="navbar-end">
          <Icon icon="camera" />
          <Icon icon="menu" />
          <Icon icon="notification" />
          <div className="navbar-user">R</div>
        </div>
      </nav>

      <aside
        className="aside"
        onTransitionEnd={() => {
          if (!asideActive) {
            asideRef.current.classList.remove("show");
          }
        }}
        ref={asideRef}
      >
        <div className="aside-main">
          <div className="main-header">
            <Icon icon="hamburger" onClick={() => setAsideActive(0)} />
            <Brand />
          </div>
          <ul className="main-content">
            <li className="content-item">
              <Icon icon="home" className="item-icon" />
              <span className="item-text">Home</span>
            </li>
            <li className="content-item">
              <Icon icon="explore" className="item-icon" />
              <span className="item-text">Explore</span>
            </li>
            <li className="content-item">
              <Icon icon="subscriptions" className="item-icon" />
              <span className="item-text">Subscriptions</span>
            </li>
          </ul>
        </div>
      </aside>

      <div className="content">
        <div className="content-main">
          <div className="video-wrapper" onTimeUpdate={handleTimeUpdate}>
            <video
              className="video-stream"
              autoPlay
              controls={true}
              ref={videoRef}
            >
              <source src={ytVideo1} />
            </video>
            <div className="video-controls">
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{
                    width: `${videoProgress}%`,
                  }}
                  ref={videoProgressRef}
                ></div>
              </div>
              <div className="buttons">
                <Icon icon="prev" variant="player" />
                {videoPlay ? (
                  <div onClick={() => setVideoPlay(false)}>
                    <Icon icon="pause" variant="player" />
                  </div>
                ) : (
                  <div onClick={() => setVideoPlay(true)}>
                    <Icon icon="play" variant="player" />
                  </div>
                )}
                {/* <Icon icon="play" variant="player" /> */}
                <Icon icon="next" variant="player" />
                <Icon icon="mute" variant="player" />
                <Icon icon="muted" variant="player" />
                <Icon icon="subtitles" variant="player" />
                <Icon icon="settings" variant="player" />
                <Icon icon="miniplayer" variant="player" />
                <Icon icon="size" variant="player" />
                <Icon icon="fullscreen" variant="player" />

                <Icon icon="home" variant="player" />
                <Icon icon="explore" variant="player" />
                <Icon icon="subscriptions" variant="player" />
                <Icon icon="library" variant="player" />
                <Icon icon="history" variant="player" />
                <Icon icon="your-videos" variant="player" />
                <Icon icon="watch-later" variant="player" />
                <Icon icon="mix" variant="player" />
                <Icon icon="liked-videos" variant="player" />
                <Icon icon="show-more" variant="player" />
                <Icon icon="youtube-premium" variant="player" />
                <Icon icon="movies" variant="player" />
                <Icon icon="gaming" variant="player" />
                <Icon icon="live" variant="player" />
                <Icon icon="sports" variant="player" />
                <Icon icon="settings-2" variant="player" />
                <Icon icon="report-history" variant="player" />
                <Icon icon="help" variant="player" />
                <Icon icon="send-feedback" variant="player" />
                <Icon icon="hamburger" variant="player" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-right">Content Right</div>
      </div>
    </>
  );
}

export default App;
