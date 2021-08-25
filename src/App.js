import { faCamera, faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import "./App.scss";

import Icon from "./Components/Icon";

import ytLogoImg from "./images/yt-logo.svg";
import ytVideo1 from "./videos/C-BooL - Golden Rules (Official Video).webm";

function App() {
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
          <div className="video-wrapper">
            <video className="video-stream" controls>
              <source src={ytVideo1} />
            </video>
            <div className="video-controls">
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="buttons">
                {" "}
                <Icon icon="prev" />
                <Icon icon="play" />
                <Icon icon="next" />
                <Icon icon="mute" />
                <Icon icon="muted" />
                <Icon icon="subtitles" />
                <Icon icon="settings" />
                <Icon icon="miniplayer" />
                <Icon icon="size" />
                <Icon icon="fullscreen" />
                <Icon icon="pause" />
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
