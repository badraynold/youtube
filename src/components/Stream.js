import Streams from "../components/Streams";
import Icon from "../components/Icon";
import { useRef, useState, useEffect } from "react";

const Stream = (props) => {
  const [videoPlay, setVideoPlay] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  //   console.log(props);

  const videoRef = useRef();
  const prevVideo = useRef();

  const videoProgressRef = useRef();
  const stream = Streams.filter((item) => item.id === props.id)[0];

  const videoSrc = stream.video;

  useEffect(() => {
    if (videoPlay) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [videoPlay]);

  useEffect(() => {
    if (prevVideo.current !== props.id) {
      videoRef.current.load();
      prevVideo.current = props.id;
    }
  }, [props.id]);

  const handleTimeUpdate = (e) => {
    const progress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;

    setVideoProgress(progress);
  };

  return (
    <div className="video-wrapper" onTimeUpdate={handleTimeUpdate}>
      <video className="video-stream" autoPlay controls={true} ref={videoRef}>
        <source src={videoSrc} />
      </video>
      <div className="video-controls">
        <div className="progress">
          <div
            className="progress-bar"
            style={{
              width: `${videoProgress}%`,
            }}
            ref={videoProgressRef}
          ></div>
        </div>
        <div className="buttons">
          <Icon icon="prev" variant="player" />
          {videoPlay ? (
            <div onClick={() => setVideoPlay(false)}>
              <Icon icon="pause" variant="player" />
            </div>
          ) : (
            <div onClick={() => setVideoPlay(true)}>
              <Icon icon="play" variant="player" />
            </div>
          )}
          {/* <Icon icon="play" variant="player" /> */}
          <Icon icon="next" variant="player" />
          <Icon icon="mute" variant="player" />
          <Icon icon="muted" variant="player" />
          <Icon icon="subtitles" variant="player" />
          <Icon icon="settings" variant="player" />
          <Icon icon="miniplayer" variant="player" />
          <Icon icon="size" variant="player" />
          <Icon icon="fullscreen" variant="player" />
        </div>
      </div>
    </div>
  );
};

export default Stream;
