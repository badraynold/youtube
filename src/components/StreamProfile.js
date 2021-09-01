import Icon from "../components/Icon";
import Linkify from "react-linkify";
import { useState } from "react";

const StreamProfile = (props) => {
  const [update, setUpdate] = useState(0);
  const stream = props.stream;
  const profileImg = stream.profileImage;
  let description = stream.description;

  const setSubscribeStatus = (state) => {
    stream.subscribeStatus = state;
    setUpdate(update + 1);
  };
  let subscribeStatus = stream.subscribeStatus;
  description = description.split("\n").map((item, idx) => {
    return (
      <span key={idx}>
        <Linkify>{item}</Linkify>
        <br />
      </span>
    );
  });

  return (
    <div className="main-profile">
      <div className="profile-header">
        <img src={profileImg} className="profile-img" alt="Profile " />
        <div className="profile-info">
          <div className="info-author-wrapper">
            <h3 className="info-author">
              {stream.author}
              <Icon icon="author-sound" className="author-icon" />
            </h3>

            <p className="info-subscribers">{stream.subscribers} subscribers</p>
          </div>
        </div>
        <div className="profile-actions">
          {!subscribeStatus ? (
            <button
              className="action-subscribe"
              onClick={() => setSubscribeStatus(true)}
            >
              Subscribe
            </button>
          ) : (
            <>
              <button
                className="action-unsubscribe"
                onClick={() => setSubscribeStatus(false)}
              >
                Subscribed
              </button>
              <Icon icon="notification" />
            </>
          )}
        </div>
      </div>
      <div className="profile-content">
        <p className="profile-description">{description}</p>
        <p className="profile-more">Show more</p>
      </div>
    </div>
  );
};

export default StreamProfile;
