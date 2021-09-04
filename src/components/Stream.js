import Streams from "../components/Streams";
import Icon from "../components/Icon";
import Tooltip from "./Tooltip";
import { useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Stream = (props) => {
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [volume, setVolume] = useState(100);

  const [currentTime, setCurrentTime] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [progressTime, setProgressTime] = useState("");

  const [onVideo, setOnVideo] = useState(false);
  const [onVolumeIcon, setOnVolumeIcon] = useState(false);
  const [onVolumeBar, setOnVolumeBar] = useState(false);
  const [onProgressBar, setOnProgressBar] = useState(false);

  const [visibleControls, setVisibleControls] = useState(false);
  const [visibleVolume, setVisibleVolume] = useState(false);
  const [visibleProgress, setVisibleProgress] = useState(false);
  const [progressVideo, setProgressVideo] = useState(0);

  const [centralIcon, setCentralIcon] = useState(true);

  const [volumeClicked, setVolumeClicked] = useState(false);
  const [progressClicked, setProgressClicked] = useState(false);

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoSrc, setVideoSrc] = useState(props.stream.video);
  const [posterImg, setPosterImg] = useState("");
  const [progressTimeBar, setProgressTimeBar] = useState(50);

  const videoRef = useRef();
  const videoWrapperRef = useRef();

  const volumeRef = useRef();
  const volumeInnerRef = useRef();

  const progressRef = useRef();
  const progressInnerRef = useRef();

  const progressVideoRef = useRef();

  const history = useHistory();

  const currentIdx = Streams.findIndex((item) => item.id === props.stream.id);
  let nextIdx = currentIdx + 1;
  if (nextIdx >= Streams.length) {
    nextIdx = 0;
  }
  const nextId = Streams[nextIdx].id;

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
      setMute(false);
    } else {
      setMute(true);
    }
    setVolume(pct);
    setRealvolume(pct);
  };

  const handleProgressTime = (e) => {
    const progressRect = progressInnerRef.current.getClientRects()[0];
    let x = e.clientX - progressRect.x;

    if (x < 0) {
      x = 0;
    } else if (x > progressRect.width) {
      x = progressRect.width;
    }

    const pct = (x / progressRect.width) * 100;
    const progressTime = (pct / 100) * videoRef.current.duration;
    const ms = getMinutesSeconds(progressTime);

    setProgressTime(`${ms.minutes}:${ms.seconds}`);
    setProgressTimeBar(pct);
  };

  const handleTimeMouseMove = (e) => {
    handleProgressTime(e);
  };

  const handleProgressBar = (e) => {
    const progressRect = progressInnerRef.current.getClientRects()[0];
    let x = e.clientX - progressRect.x;

    if (x < 0) {
      x = 0;
    } else if (x > progressRect.width) {
      x = progressRect.width;
    }

    const pct = (x / progressRect.width) * 100;
    setProgressVideo(pct);
    setRealProgress(pct);
    videoRef.current.pause();
  };

  const handleVolumeMouseDown = (e) => {
    setVolumeClicked(true);
    handleVolumeSet(e);
  };

  const handleProgressMouseDown = (e) => {
    setProgressClicked(true);
    handleProgressBar(e);
  };

  const handleVolumeMouseMove = (e) => {
    if (volumeClicked) {
      handleVolumeSet(e);
    }
  };
  const handleProgressMouseMove = (e) => {
    if (progressClicked) {
      handleProgressTime(e);
      handleProgressBar(e);
    }
  };

  const handleVolumeMouseUp = (e) => {
    setVolumeClicked(false);
  };

  const handleProgressMouseUp = (e) => {
    setProgressClicked(false);

    if (play) {
      videoRef.current.play();
    }
  };

  const setRealvolume = (vol) => {
    videoRef.current.volume = vol / 100;
  };

  const setRealProgress = (pct) => {
    videoRef.current.currentTime = (pct / 100) * videoRef.current.duration;
  };

  const handleClick = (e) => {
    if (e.target === videoRef.current) {
      setCentralIcon(true);
      setPlay(!play);
    }
  };

  const handleFullScreenChange = (e) => {
    if (!document.fullscreenElement) {
      setFullscreen(false);
    }
  };

  const handleEndVideo = (e) => {
    const currentIdx = Streams.findIndex((item) => item.id === props.stream.id);
    let nextIdx = currentIdx + 1;
    if (nextIdx >= Streams.length) {
      nextIdx = 0;
    }
    const nextId = Streams[nextIdx].id;
    history.push(`/watch?v=${nextId}`);
  };

  const handleVideoLoaded = (e) => {
    console.log("video loaded");
    console.log(videoRef.current.duration);
    handleTimeUpdate(e);
    setVideoLoaded(true);
    if (play) {
      videoRef.current.play();
    }
  };

  // use effects
  useEffect(() => {
    videoWrapperRef.current.addEventListener(
      "fullscreenchange",
      handleFullScreenChange
    );
  });
  useEffect(() => {
    if (volumeClicked) {
      window.addEventListener("mousemove", handleVolumeMouseMove);
      window.addEventListener("mouseup", handleVolumeMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleVolumeMouseMove);
      window.removeEventListener("mouseup", handleVolumeMouseUp);
    };
  });

  useEffect(() => {
    if (progressClicked) {
      window.addEventListener("mousemove", handleProgressMouseMove);
      window.addEventListener("mouseup", handleProgressMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleProgressMouseMove);
      window.removeEventListener("mouseup", handleProgressMouseUp);
    };
  });

  useEffect(() => {
    if (play) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [play]);

  useEffect(() => {
    if (fullscreen) {
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
  }, [fullscreen]);

  useEffect(() => {
    if (mute) {
      videoRef.current.muted = true;
      setVolume(0);
    } else {
      videoRef.current.muted = false;
      setVolume(videoRef.current.volume * 100);
    }
  }, [mute]);

  useEffect(() => {
    console.log("load video start");
    videoRef.current.load();
    setVideoLoaded(false);
    setProgressVideo(0);
  }, [videoSrc]);

  useEffect(() => {
    if (props.stream.posterImage) {
      setPosterImg(props.stream.posterImage);
    }
    setVideoSrc(props.stream.video);
  }, [props.stream.video, props.stream.posterImage]);

  useEffect(() => {
    if (onVideo || volumeClicked || progressClicked || play) {
      setVisibleControls(true);
    } else {
      setVisibleControls(false);
    }
  }, [onVideo, volumeClicked, progressClicked, play]);

  useEffect(() => {
    if (onVolumeIcon || onVolumeBar || volumeClicked) {
      setVisibleVolume(true);
    } else {
      setVisibleVolume(false);
    }
  }, [onVolumeIcon, onVolumeBar, volumeClicked]);

  useEffect(() => {
    if (onProgressBar || progressClicked) {
      setVisibleProgress(true);
    } else {
      setVisibleProgress(false);
    }
  }, [onProgressBar, progressClicked]);

  return (
    <div
      className="video-wrapper"
      onTimeUpdate={handleTimeUpdate}
      ref={videoWrapperRef}
      onMouseEnter={() => setOnVideo(true)}
      onMouseLeave={() => setOnVideo(false)}
      onClick={(e) => handleClick(e)}
      onDoubleClick={() => setFullscreen(!fullscreen)}
    >
      <video
        className="video-stream"
        controls={false}
        ref={videoRef}
        onLoadedData={(e) => handleVideoLoaded(e)}
        onEnded={(e) => handleEndVideo(e)}
        poster={posterImg}
      >
        <source src={videoSrc} />
      </video>

      {centralIcon ? (
        <div
          className="video-central"
          onAnimationEnd={() => setCentralIcon(false)}
        >
          <Icon icon={play ? "play" : "pause"} className="central-icon" />
        </div>
      ) : null}

      {videoLoaded ? (
        <div
          className={
            visibleControls ? "video-controls active" : "video-controls"
          }
        >
          <div
            className="progress-wrapper"
            onMouseDown={(e) => handleProgressMouseDown(e)}
            onMouseEnter={() => setOnProgressBar(true)}
            onMouseLeave={() => setOnProgressBar(false)}
            ref={progressRef}
            onMouseMove={(e) => handleTimeMouseMove(e)}
          >
            <div
              className={visibleProgress ? "progress active" : "progress"}
              ref={progressInnerRef}
            >
              <div
                className={
                  visibleProgress ? "progress-time active" : "progress-time"
                }
                style={{ width: `${progressTimeBar}%` }}
              >
                <span>{progressTime}</span>
              </div>

              <div
                className="progress-bar"
                style={{
                  width: `${progressVideo}%`,
                }}
                ref={progressVideoRef}
              ></div>
            </div>
          </div>
          <div className="buttons">
            {play ? (
              <Tooltip message="Pause (k)" position="top-right">
                <div onClick={() => setPlay(false)}>
                  <Icon icon="pause" variant="player" />
                </div>
              </Tooltip>
            ) : (
              <Tooltip message="Play (k)" position="top-right">
                <div onClick={() => setPlay(true)}>
                  <Icon icon="play" variant="player" />
                </div>
              </Tooltip>
            )}
            <Tooltip message="Next (n)">
              <Link to={`/watch?v=${nextId}`}>
                <Icon icon="next" variant="player" />
              </Link>
            </Tooltip>

            <Tooltip message={mute ? "Unmute (m)" : "Mute (m)"}>
              <div
                onClick={() => setMute(!mute)}
                onMouseEnter={() => setOnVolumeIcon(true)}
                onMouseLeave={() => setOnVolumeIcon(false)}
              >
                {mute ? (
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
              onMouseDown={handleVolumeMouseDown}
              onMouseEnter={() => setOnVolumeBar(true)}
              onMouseLeave={() => setOnVolumeBar(false)}
              ref={volumeRef}
            >
              <div className="volume" ref={volumeInnerRef}>
                <div
                  className="volume-bar"
                  style={{ width: `${volume}%` }}
                ></div>
              </div>
            </div>

            <div className="time-current">{currentTime}</div>
            <div className="time-separator">/</div>
            <div className="time-duration">{totalTime}</div>

            <div className="icons-right">
              <Tooltip message="Subtitles/closed captions (c)">
                <div>
                  <Icon icon="subtitles" variant="player" />
                </div>
              </Tooltip>

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
              <Tooltip
                position="top-left"
                message={
                  fullscreen ? "Exit full screen (f)" : "Full screen (f)"
                }
              >
                <div onClick={() => setFullscreen(!fullscreen)}>
                  {fullscreen ? (
                    <Icon icon="fullscreen-exit" variant="player" />
                  ) : (
                    <Icon icon="fullscreen" variant="player" />
                  )}
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Stream;
