import Icon from "../components/Icon";

const StreamProfile = (props) => {
  const stream = props.stream;
  const profileImg = stream.profileImage;

  return (
    <div className="main-profile">
      <img src={profileImg} className="profile-img" alt="Profile " />
      <div className="profile-info">
        <h3 className="info-author">
          Ed Sheeran
          <Icon icon="author-sound" className="author-icon" />
        </h3>
        <p className="info-subscribers">48.6M subscribers</p>
        <p className="info-description">
          The official music video for Ed Sheeran - Shape Of You
          <br /> Pre-order the new album "=" - out October 29th:
          <a href="#1">https://es.lnk.to/equals</a>
        </p>
        <p className="info-more">Show more</p>
      </div>
      <div className="profile-actions">
        <button className="actions-subscribe">Subscribe</button>
      </div>
    </div>
  );
};

export default StreamProfile;
