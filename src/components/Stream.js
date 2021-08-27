import Streams from "../components/Streams";
import Icon from "../components/Icon";
import { useRef, useState, useEffect } from "react";

const Stream = (props) => {
  const [videoPlay, setVideoPlay] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const v = new URLSearchParams(props.location.search).get("v");
  const videoRef = useRef();
  const prevVideo = useRef();

  const videoProgressRef = useRef();
  const stream = Streams.filter((item) => item.id === v)[0];

  const videoSrc = stream.video;

  useEffect(() => {
    if (videoPlay) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [videoPlay]);

  useEffect(() => {
    console.log("v change");
    if (prevVideo.current !== v) {
      videoRef.current.load();
      prevVideo.current = v;
    }
  }, [v]);

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

          <Icon icon="home" variant="player" />
          <Icon icon="explore" variant="player" />
          <Icon icon="subscriptions" variant="player" />
          <Icon icon="library" variant="player" />
          <Icon icon="history" variant="player" />
          <Icon icon="your-videos" variant="player" />
          <Icon icon="watch-later" variant="player" />
          <Icon icon="mix" variant="player" />
          <Icon icon="liked-videos" variant="player" />
          <Icon icon="show-more" variant="player" />
          <Icon icon="youtube-premium" variant="player" />
          <Icon icon="movies" variant="player" />
          <Icon icon="gaming" variant="player" />
          <Icon icon="live" variant="player" />
          <Icon icon="sports" variant="player" />
          <Icon icon="settings-2" variant="player" />
          <Icon icon="report-history" variant="player" />
          <Icon icon="help" variant="player" />
          <Icon icon="send-feedback" variant="player" />
          <Icon icon="hamburger" variant="player" />
        </div>
      </div>
    </div>
  );
};

export default Stream;
