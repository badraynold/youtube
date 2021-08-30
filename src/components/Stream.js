import Streams from "../components/Streams";
import Icon from "../components/Icon";
import Tooltip from "./Tooltip";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Stream = (props) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [muteVideo, setMuteVideo] = useState(false);
  const [fullscreenVideo, setFullscreenVideo] = useState(false);
  const [volumeVideo, setVolumeVideo] = useState(100);

  const [volumeClicked, setVolumeClicked] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [totalTime, setTotalTime] = useState("");

  const [onVideo, setOnVideo] = useState(false);
  const [onVolumeIcon, setOnVolumeIcon] = useState(false);
  const [onVolumeBar, setOnVolumeBar] = useState(false);

  const [visibleControls, setVisibleControls] = useState(false);
  const [visibleVolume, setVisibleVolume] = useState(false);

  const [progressVideo, setProgressVideo] = useState(0);
  const stream = props.stream;

  const videoRef = useRef();
  const videoWrapperRef = useRef();

  const prevVideo = useRef();
  const volumeRef = useRef();
  const volumeInnerRef = useRef();

  const progressVideoRef = useRef();
  const currentIdx = Streams.findIndex((item) => item.id === props.stream.id);
  let nextIdx = currentIdx + 1;
  if (nextIdx >= Streams.length) {
    nextIdx = 0;
  }
  const nextId = Streams[nextIdx].id;

  const videoSrc = stream.video;

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
    const volumeRect = volumeInnerRef.current.getClientRects()[0];
    let x = e.clientX - volumeRect.x;

    if (x < 0) {
      x = 0;
    } else if (x > volumeRect.width) {
      x = volumeRect.width;
    }

    const pct = (x / volumeRect.width) * 100;

    if (pct > 0) {
      setMuteVideo(false);
    } else {
      setMuteVideo(true);
    }
    setVolumeVideo(pct);
    setRealVolumeVideo(pct);
  };

  const handleMouseDown = (e) => {
    setVolumeClicked(true);
    handleVolumeSet(e);
  };

  const handleMouseMove = (e) => {
    if (volumeClicked) {
      handleVolumeSet(e);
    }
  };

  const handleMouseUp = (e) => {
    setVolumeClicked(false);
  };

  const setRealVolumeVideo = (vol) => {
    videoRef.current.volume = vol / 100;
  };

  useEffect(() => {
    if (volumeClicked) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [volumeClicked]);

  useEffect(() => {
    if (playVideo) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [playVideo]);

  useEffect(() => {
    if (fullscreenVideo) {
      if (videoWrapperRef.current.requestFullscreen) {
        videoWrapperRef.current.requestFullscreen();
      } else if (videoWrapperRef.current.webkitRequestFullscreen) {
        /* Safari */
        videoWrapperRef.current.webkitRequestFullscreen();
      } else if (videoWrapperRef.current.msRequestFullscreen) {
        /* IE11 */
        videoWrapperRef.current.msRequestFullscreen();
      }
    } else {
      if (document.fullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          /* IE11 */
          document.msExitFullscreen();
        }
      }
    }
  }, [fullscreenVideo]);

  useEffect(() => {
    if (muteVideo) {
      videoRef.current.muted = true;
      setVolumeVideo(0);
    } else {
      videoRef.current.muted = false;
      setVolumeVideo(videoRef.current.volume * 100);
    }
  }, [muteVideo]);

  useEffect(() => {
    if (prevVideo.current !== props.stream.id) {
      videoRef.current.load();
      prevVideo.current = props.stream.id;
    }
  }, [props.stream.id]);

  useEffect(() => {
    if (onVideo || volumeClicked) {
      setVisibleControls(true);
    } else {
      setVisibleControls(false);
    }
  }, [onVideo, volumeClicked]);

  useEffect(() => {
    if (onVolumeIcon || onVolumeBar || volumeClicked) {
      setVisibleVolume(true);
    } else {
      setVisibleVolume(false);
    }
  }, [onVolumeIcon, onVolumeBar, volumeClicked]);

  return (
    <div
      className="video-wrapper"
      onTimeUpdate={handleTimeUpdate}
      ref={videoWrapperRef}
      onMouseEnter={() => setOnVideo(true)}
      onMouseLeave={() => setOnVideo(false)}
    >
      <video className="video-stream" autoPlay controls={false} ref={videoRef}>
        <source src={videoSrc} />
      </video>

      <div
        className={visibleControls ? "video-controls active" : "video-controls"}
      >
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
            <Tooltip message="Pause (k)">
              <div onClick={() => setPlayVideo(false)}>
                <Icon icon="pause" variant="player" />
              </div>
            </Tooltip>
          ) : (
            <Tooltip message="Play (k)">
              <div onClick={() => setPlayVideo(true)}>
                <Icon icon="play" variant="player" />
              </div>
            </Tooltip>
          )}
          <Tooltip message="Next (n)">
            <Link to={`/watch?v=${nextId}`}>
              <Icon icon="next" variant="player" />
            </Link>
          </Tooltip>

          <Tooltip message={muteVideo ? "Unmute (m)" : "Mute (m)"}>
            <div
              onClick={() => setMuteVideo(!muteVideo)}
              onMouseEnter={() => setOnVolumeIcon(true)}
              onMouseLeave={() => setOnVolumeIcon(false)}
            >
              {muteVideo ? (
                <Icon icon="muted" variant="player" />
              ) : (
                <Icon icon="mute" variant="player" />
              )}
            </div>
          </Tooltip>

          <div
            className={
              visibleVolume ? "volume-wrapper active" : "volume-wrapper"
            }
            onMouseDown={handleMouseDown}
            onMouseEnter={() => setOnVolumeBar(true)}
            onMouseLeave={() => setOnVolumeBar(false)}
            ref={volumeRef}
          >
            <div className="volume" ref={volumeInnerRef}>
              <div
                className="volume-bar"
                style={{ width: `${volumeVideo}%` }}
              ></div>
            </div>
          </div>
          <div className="time-current">{currentTime}</div>
          <div className="time-separator">/</div>
          <div className="time-duration">{totalTime}</div>

          <div className="icons-right">
            <div>
              <Icon icon="subtitles" variant="player" />
            </div>

            <Tooltip message="Settings">
              <div>
                <Icon icon="settings" variant="player" />
              </div>
            </Tooltip>

            <Tooltip message="Miniplayer (i)">
              <div>
                <Icon icon="miniplayer" variant="player" />
              </div>
            </Tooltip>

            <Tooltip message="Theater mode (t)">
              <div>
                <Icon icon="theater" variant="player" />
              </div>
            </Tooltip>
            <Tooltip message="Full screen (f)">
              <div onClick={() => setFullscreenVideo(!fullscreenVideo)}>
                {fullscreenVideo ? (
                  <Icon icon="fullscreen-exit" variant="player" />
                ) : (
                  <Icon icon="fullscreen" variant="player" />
                )}
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stream;
