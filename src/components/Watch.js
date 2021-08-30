import Stream from "../components/Stream";
import StreamDescription from "./StreamDescription";
import StreamProfile from "./StreamProfile";
import Streams from "../components/Streams";

import { Link } from "react-router-dom";

const Watch = (props) => {
  const videoId = new URLSearchParams(props.location.search).get("v");
  const stream = Streams.filter((item) => item.id === videoId)[0];

  //   const tags = stream.tags.map(tag => )

  const videoItems = Streams.map((item) => {
    return (
      <div className="video-item" key={item.id}>
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
        <Stream stream={stream} />
        <StreamDescription stream={stream} />
        <StreamProfile stream={stream} />
      </div>
      <div className="content-right">{videoItems}</div>
    </div>
  );
};

export default Watch;
