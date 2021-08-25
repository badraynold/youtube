import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import "./App.scss";

import Icon from "./Components/Icon";

import ytLogoImg from "./images/yt-logo.svg";

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
            <span className="logo-text">Rafała</span>
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

      <section className="section1"></section>
    </>
  );
}

export default App;
