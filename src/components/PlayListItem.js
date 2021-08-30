import { useRef } from "react";
import { Link } from "react-router-dom";

const PlayListItem = (props) => {
  const stream = props.stream;
  const imgRef = useRef();
  const handleMouseOver = (e) => {
    imgRef.current.src = props.stream.previewImage;
  };
  const handleMouseOut = (e) => {
    imgRef.current.src = props.stream.image;
  };
  return (
    <div className="video-item" key={stream.id}>
      <Link className="item-link" to={`/watch?v=${stream.id}`}>
        <img
          src={stream.image}
          className="item-img"
          alt="item"
          ref={imgRef}
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={(e) => handleMouseOut(e)}
        />
        {/* <img src={stream.previewImage} className="item-preview" alt="item" /> */}
        <div className="item-desc">
          <h3 className="desc-title">{stream.title}</h3>
          <span className="desc-author">{stream.author}</span>
          <br />
          <span className="desc-views">{stream.viewsSmall} views</span>
          <span className="desc-time">{stream.releaseAgo}</span>
        </div>
      </Link>
    </div>
  );
};

export default PlayListItem;
