import Stream from "../components/Stream";
import StreamDescription from "./StreamDescription";
import StreamProfile from "./StreamProfile";
import Streams from "../components/Streams";
import PlayList from "../components/PlayList";

import { Link } from "react-router-dom";

const Watch = (props) => {
  const videoId = new URLSearchParams(props.location.search).get("v");
  const stream = Streams.filter((item) => item.id === videoId)[0];

  return (
    <div className="content">
      <div className="content-main">
        <Stream stream={stream} />
        <StreamDescription stream={stream} />
        <StreamProfile stream={stream} />
      </div>
      <div className="content-right">
        <PlayList stream={stream} />
      </div>
    </div>
  );
};

export default Watch;
