import Streams from "../components/Streams";
import Icon from "../components/Icon";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Stream = (props) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [muteVideo, setMuteVideo] = useState(false);
  const [volumeVideo, setVolumeVideo] = useState(100);
  const [volumeClicked, setVolumeClicked] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [totalTime, setTotalTime] = useState("");

  const [progressVideo, setProgressVideo] = useState(0);
  const stream = props.stream;

  const videoRef = useRef();
  const prevVideo = useRef();
  const volumeRef = useRef();

  const progressVideoRef = useRef();
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
    videoRef.current.volume = volumeVideo / 100;
  }, [volumeVideo]);

  useEffect(() => {
    if (prevVideo.current !== props.stream.id) {
      videoRef.current.load();
      prevVideo.current = props.stream.id;
    }
  }, [props.stream.id]);

  const handleTimeUpdate = (e) => {
    const progress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;

    setProgressVideo(progress);
    const ms = getMinutesSeconds(videoRef.current.currentTime);
    setCurrentTime(`${ms.minutes}:${ms.seconds}`);
    const tms = getMinutesSeconds(videoRef.current.duration);
    setTotalTime(`${tms.minutes}:${tms.seconds}`);
  };

  const getMinutesSeconds = (t) => {
    let ret = {
      minutes: "0",
      seconds: "00",
    };
    if (!isNaN(t)) {
      const m = Math.floor(t / 60);
      const s = ("0" + Math.floor(t - m * 60)).slice(-2);
      ret = {
        minutes: m,
        seconds: s,
      };
    }
    return ret;
  };

  const handleVolumeSet = (e) => {
    const volumeRect = volumeRef.current.getClientRects()[0];
    let x = e.clientX - volumeRect.x;
    if (x < 0) {
      x = 0;
    } else if (x > volumeRect.width) {
      x = volumeRect.width;
    }

    const pct = (x / volumeRect.width) * 100;
    setVolumeVideo(pct);
    setMuteVideo(false);
  };

  const handleMouseDown = (e) => {
    // e.preventDefault();
    console.log("mousedown");
    setVolumeClicked(true);

    handleVolumeSet(e);
  };

  const handleMouseMove = (e) => {
    if (volumeClicked) {
      handleVolumeSet(e);
    }
  };

  const handleMouseUp = (e) => {
    // e.preventDefault();
    setVolumeClicked(false);
    console.log("mouseup");
  };

  useEffect(() => {
    if (volumeClicked) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  useEffect(() => {
    if (volumeClicked) {
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [volumeClicked]);

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
              width: `${progressVideo}%`,
            }}
            ref={progressVideoRef}
          ></div>
        </div>
        <div className="buttons">
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
          <div
            className="volume-wrapper"
            onMouseDown={handleMouseDown}
            // onMouseMove={handleMouseMove}
            // onMouseLeave={handleMouseUp}
            // onMouseUp={handleMouseUp}
            ref={volumeRef}
          >
            <div className="volume">
              <div
                className="volume-bar"
                style={{ width: `${volumeVideo}%` }}
              ></div>
            </div>
          </div>
          <div className="time-current">{currentTime}</div>
          <div className="time-separator">/</div>
          <div className="time-duration">{totalTime}</div>

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
