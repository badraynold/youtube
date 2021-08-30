import Streams from "../components/Streams";
import PlayListItem from "./PlayListItem";

const PlayList = (props) => {
  const videoItems = Streams.filter((item) => item.id !== props.stream.id).map(
    (item) => {
      return <PlayListItem stream={item} />;
    }
  );
  return videoItems;
};
export default PlayList;
