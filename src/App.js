import { faCamera, faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

// import "./App.scss";

import Icon from "./Components/Icon";

import ytLogoImg from "./images/yt-logo.svg";
import ytVideo1 from "./videos/C-BooL - Golden Rules (Official Video).webm";

function App() {
  const videoRef = useRef();
  const videoProgressRef = useRef();

  const [videoProgress, setVideoProgress] = useState(0);
  const [videoPlay, setVideoPlay] = useState(false);

  const handleTimeUpdate = (e) => {
    const progress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;

    // videoProgressRef.current.style.width = `${progress}%`;
    setVideoProgress(progress);
  };

  useEffect(() => {
    if (videoPlay) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [videoPlay]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-start">
          <div className="navbar-hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="navbar-logo">
            <a href="/" className="logo-link">
              <img src={ytLogoImg} alt="Logo" />
            </a>
            <span className="logo-text">pl</span>
          </div>
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
