import Stream from "../components/Stream";
import Streams from "../components/Streams";
import Icon from "../components/Icon";

import { Link } from "react-router-dom";

const Watch = (props) => {
  //   console.log(props);
  const videoId = new URLSearchParams(props.location.search).get("v");
  const stream = Streams.filter((item) => item.id === videoId)[0];
  console.log(stream);

  //   const tags = stream.tags.map(tag => )

  const videoItems = Streams.map((item) => {
    return (
      <div className="video-item">
        <Link className="item-link" to={`/watch?v=${item.id}`}>
          <img src={item.image} className="item-img" alt="item" />
          <div className="item-desc">
            <h3 className="desc-title">{item.title}</h3>
            <span className="desc-author">{item.author}</span>
            <br />
            <span className="desc-views">{item.viewsSmall} views</span>
            <span className="desc-time">{item.releaseAgo}</span>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div className="content">
      <div className="content-main">
        <Stream id={videoId} />
        <div className="main-description">
          <ul className="description-tags">
            <li className="tag-item">
              <a href="#1" className="tag-link">
                #EdSheeran
              </a>
            </li>
            <li className="tag-item">
              <a href="#1" className="tag-link">
                #ShapeOfYou
              </a>
            </li>
            <li className="tag-item">
              <a href="#1" className="tag-link">
                #divide
              </a>
            </li>
          </ul>
          <h1 className="description-title">
            Ed Sheeran - Shape of You (Official Music Video)
          </h1>
          <div className="description-info">
            <div className="info-left">
              <span className="info-views">5,434,043,213 views</span>
              <span className="info-release">Jan 30, 2017</span>
            </div>
            <div className="info-right">
              <div className="info-likes">
                <span className="info-link">
                  <Icon icon="like" className="info-icon" />
                  <span className="info-text">27M</span>
                </span>
                <span className="info-link">
                  <Icon icon="unlike" className="info-icon" />
                  <span className="info-text">1.3M</span>
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
      </div>
      <div className="content-right">{videoItems}</div>
    </div>
  );
};

export default Watch;
