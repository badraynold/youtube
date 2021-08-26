import { faCamera, faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

// import "./App.scss";

import Icon from "./Components/Icon";
import Brand from "./Components/Brand";

import ytLogoImg from "./images/yt-logo.svg";
import ytVideo1 from "./videos/C-BooL - Golden Rules (Official Video).webm";

import codeAndCreateIcon from "./icons/code-and-create-icon.jpg";
import sadhguruIcon from "./icons/sadhguru-icon.jpg";
import sadhguruPLIcon from "./icons/sadhguruPL-icon.jpg";
import moreleIcon from "./icons/moreletv-icon.jpg";
import ishaIcon from "./icons/isha-foundation-icon.jpg";
import dandapaniIcon from "./icons/dandapaniLLC-icon.jpg";
import traversyIcon from "./icons/traversy-media-icon.jpg";

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
      asideRef.current.classList.add("show");
      asideRef.current.classList.add("active");
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
            onClick={() => setAsideActive(true)}
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
            <Icon icon="hamburger" onClick={() => setAsideActive(false)} />
            <Brand />
          </div>
          <ul className="main-content">
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="home" className="item-icon" />
                <span className="item-text">Home</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="explore" className="item-icon" />
                <span className="item-text">Explore</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="subscriptions" className="item-icon" />
                <span className="item-text">Subscriptions</span>
              </a>
            </li>
            <li className="content-item item-separator"></li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="library" className="item-icon" />
                <span className="item-text">Library</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="history" className="item-icon" />
                <span className="item-text">History</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="your-videos" className="item-icon" />
                <span className="item-text">Your videos</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="watch-later" className="item-icon" />
                <span className="item-text">Watch later</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="live" className="item-icon" />
                <span className="item-text">Mix</span>
              </a>
            </li>

            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="liked-videos" className="item-icon" />
                <span className="item-text">Liked videos</span>
              </a>
            </li>
            <li className="content-item item-separator"></li>

            <li className="content-item item-section">Subscriptions</li>
            <li className="content-item item-subscription">
              <a href="#1" className="item-link">
                <img src={sadhguruIcon} className="item-img" alt="sadhguru" />
                <span className="item-text">Sadhguru</span>
              </a>
            </li>
            <li className="content-item item-subscription">
              <a href="#1" className="item-link">
                <img
                  src={codeAndCreateIcon}
                  className="item-img"
                  alt="Code And Create"
                />
                <span className="item-text">Code And Create</span>
              </a>
            </li>
            <li className="content-item item-subscription">
              <a href="#1" className="item-link">
                <img
                  src={moreleIcon}
                  className="item-img"
                  alt="Code And Create"
                />
                <span className="item-text">moreleTV</span>
              </a>
            </li>
            <li className="content-item item-subscription">
              <a href="#1" className="item-link">
                <img
                  src={sadhguruPLIcon}
                  className="item-img"
                  alt="Sadhguru Polska"
                />
                <span className="item-text">Sadhguru Polska</span>
              </a>
            </li>
            <li className="content-item item-subscription">
              <a href="#1" className="item-link">
                <img
                  src={ishaIcon}
                  className="item-img"
                  alt="Code And Create"
                />
                <span className="item-text">Isha Foundation</span>
              </a>
            </li>
            <li className="content-item item-subscription">
              <a href="#1" className="item-link">
                <img
                  src={dandapaniIcon}
                  className="item-img"
                  alt="Code And Create"
                />
                <span className="item-text">DandapaniLLC</span>
              </a>
            </li>
            <li className="content-item item-subscription">
              <a href="#1" className="item-link">
                <img
                  src={traversyIcon}
                  className="item-img"
                  alt="Code And Create"
                />
                <span className="item-text">Traversy Media</span>
              </a>
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
