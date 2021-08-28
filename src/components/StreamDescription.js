import Icon from "../components/Icon";

const StreamDescription = (props) => {
  const stream = props.stream;
  console.log(stream);
  const tags = stream.tags.map((item) => {
    return (
      <li className="tag-item">
        <a href="#1" className="tag-link">
          #{item}
        </a>
      </li>
    );
  });

  return (
    <div className="main-description">
      <ul className="description-tags">{tags}</ul>
      <h1 className="description-title">{stream.title}</h1>
      <div className="description-info">
        <div className="info-left">
          <span className="info-views">{stream.views} views</span>
          <span className="info-release">{stream.releaseDate}</span>
        </div>
        <div className="info-right">
          <div className="info-likes">
            <span className="info-link">
              <Icon icon="like" className="info-icon" />
              <span className="info-text">{stream.likes}</span>
            </span>
            <span className="info-link">
              <Icon icon="unlike" className="info-icon" />
              <span className="info-text">{stream.unlikes}</span>
            </span>
          </div>
          <span className="info-link">
            <Icon icon="share" className="info-icon" />
            <span className="info-text">Share</span>
          </span>
          <span className="info-link">
            <Icon icon="save" className="info-icon" />
            <span className="info-text">Save</span>
          </span>
          <span className="info-link">
            <Icon icon="description" className="info-icon" />
            <span className="info-text">Description</span>
          </span>
          <span className="info-link last-link">
            <Icon icon="more" className="info-icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default StreamDescription;
