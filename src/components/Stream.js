import Streams from "../components/Streams";
import Icon from "../components/Icon";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Stream = (props) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [muteVideo, setMuteVideo] = useState(false);
  const [volumeVideo, setVolumeVideo] = useState(100);

  const [videoProgress, setVideoProgress] = useState(0);
  const stream = props.stream;

  const videoRef = useRef();
  const prevVideo = useRef();

  const videoProgressRef = useRef();
  const currentIdx = Streams.findIndex((item) => item.id === props.stream.id);
  let nextIdx = currentIdx + 1;
  if (nextIdx >= Streams.length) {
    nextIdx = 0;
  }
  const nextId = Streams[nextIdx].id;

  const videoSrc = stream.video;

  useEffect(() => {
    if (playVideo) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [playVideo]);

  useEffect(() => {
    if (muteVideo) {
      videoRef.current.muted = true;
      setVolumeVideo(0);
    } else {
      videoRef.current.muted = false;
      setVolumeVideo(100);
    }
  }, [muteVideo]);

  useEffect(() => {
    if (prevVideo.current !== props.stream.id) {
      videoRef.current.load();
      prevVideo.current = props.stream.id;
    }
  }, [props.stream.id]);

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
          {/* <Icon icon="prev" variant="player" /> */}
          {playVideo ? (
            <div onClick={() => setPlayVideo(false)}>
              <Icon icon="pause" variant="player" />
            </div>
          ) : (
            <div onClick={() => setPlayVideo(true)}>
              <Icon icon="play" variant="player" />
            </div>
          )}
          <Link to={`/watch?v=${nextId}`}>
            <Icon icon="next" variant="player" />
          </Link>

          {muteVideo ? (
            <div onClick={() => setMuteVideo(false)}>
              <Icon icon="muted" variant="player" />
            </div>
          ) : (
            <div onClick={() => setMuteVideo(true)}>
              <Icon icon="mute" variant="player" />
            </div>
          )}

          <div className="volume">
            <div
              className="volume-bar"
              style={{ width: `${volumeVideo}%` }}
            ></div>
          </div>

          {/* <Icon icon="muted" variant="player" />
          <Icon icon="subtitles" variant="player" />
          <Icon icon="settings" variant="player" />
          <Icon icon="miniplayer" variant="player" />
          <Icon icon="size" variant="player" />
          <Icon icon="fullscreen" variant="player" /> */}
        </div>
      </div>
    </div>
  );
};

export default Stream;
