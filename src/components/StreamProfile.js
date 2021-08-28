import Icon from "../components/Icon";
import Linkify from "react-linkify";

const StreamProfile = (props) => {
  const stream = props.stream;
  const profileImg = stream.profileImage;
  let description = stream.description;
  description = description.split("\n").map((item) => {
    return (
      <>
        <Linkify>{item}</Linkify>
        <br />
      </>
    );
  });

  //   description = description.replaceAll("a", "<br />");
  return (
    <div className="main-profile">
      <img src={profileImg} className="profile-img" alt="Profile " />
      <div className="profile-info">
        <h3 className="info-author">
          {stream.author}
          <Icon icon="author-sound" className="author-icon" />
        </h3>
        <p className="info-subscribers">{stream.subscribers} subscribers</p>
        <p className="info-description">{description}</p>
        <p className="info-more">Show more</p>
      </div>
      <div className="profile-actions">
        <button className="actions-subscribe">Subscribe</button>
      </div>
    </div>
  );
};

export default StreamProfile;
