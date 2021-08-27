import { useEffect, useRef, useState } from "react";
import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Icon from "./components/Icon";
import Brand from "./components/Brand";

import Watch from "./components/Watch";

import codeAndCreateIcon from "./icons/code-and-create-icon.jpg";
import sadhguruIcon from "./icons/sadhguru-icon.jpg";
import sadhguruPLIcon from "./icons/sadhguruPL-icon.jpg";
import moreleIcon from "./icons/moreletv-icon.jpg";
import ishaIcon from "./icons/isha-foundation-icon.jpg";
import dandapaniIcon from "./icons/dandapaniLLC-icon.jpg";
import traversyIcon from "./icons/traversy-media-icon.jpg";

const App = (props) => {
  const asideRef = useRef();
  const [asideActive, setAsideActive] = useState(0);

  useEffect(() => {
    if (asideActive) {
      asideRef.current.classList.add("show");
      asideRef.current.classList.add("active");
    } else {
      asideRef.current.classList.remove("active");
    }
  }, [asideActive]);

  return (
    <Router>
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
            <li className="content-item item-more">
              <a href="#1" className="item-link">
                <Icon icon="show-more" className="item-icon" />
                <span className="item-text">Show 8 more</span>
              </a>
            </li>
            <li className="content-item item-separator"></li>
            <li className="content-item item-section">More from youtube</li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="youtube-premium" className="item-icon" />
                <span className="item-text">YouTube Premium</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="movies" className="item-icon" />
                <span className="item-text">Movies</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="gaming" className="item-icon" />
                <span className="item-text">Gaming</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="live" className="item-icon" />
                <span className="item-text">Live</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="sports" className="item-icon" />
                <span className="item-text">Sports</span>
              </a>
            </li>
            <li className="content-item item-separator"></li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="settings-2" className="item-icon" />
                <span className="item-text">Settings</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="report-history" className="item-icon" />
                <span className="item-text">Report history</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="help" className="item-icon" />
                <span className="item-text">Help</span>
              </a>
            </li>
            <li className="content-item">
              <a href="#1" className="item-link">
                <Icon icon="send-feedback" className="item-icon" />
                <span className="item-text">Send feedback</span>
              </a>
            </li>
            <li className="content-item item-separator"></li>
            <li className="content-item item-footer">
              <ul className="footer-links">
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    About
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Press
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Copyright
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Contact us
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Creators
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Advertise
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Developers
                  </a>
                </li>
              </ul>
              <ul className="footer-links">
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Terms
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Privacy
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Policy &amp; Safety
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    How YouTube works
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#1" className="footer-link">
                    Test new features
                  </a>
                </li>
              </ul>
              <div className="footer-copyright">&copy; 2021 Google LLC</div>
            </li>
          </ul>
        </div>
      </aside>
      <Switch>
        <Route path="/watch" component={Watch} />
        <Route>
          <Redirect push to="/watch?v=5ewENntV0uY"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
