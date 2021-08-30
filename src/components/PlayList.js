import { Link } from "react-router-dom";
import Streams from "../components/Streams";

const PlayList = (props) => {
  const videoItems = Streams.filter((item) => item.id !== props.stream.id).map(
    (item) => {
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
    }
  );
  return videoItems;
};
export default PlayList;
