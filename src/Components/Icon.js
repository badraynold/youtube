const Icon = (props) => {
  let icon;

  const classes = props.className ? "yt-icon " + props.className : "yt-icon";

  switch (props.icon) {
    case "search":
      icon = (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <g>
            <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
          </g>
        </svg>
      );
      break;
    case "mic":
      icon = (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <g>
            <path d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"></path>
          </g>
        </svg>
      );

      break;
    case "camera":
      icon = (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <g>
            <path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"></path>
          </g>
        </svg>
      );
      break;
    case "menu":
      icon = (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <g>
            <path d="M16,4v4h4V4H16z M19,7h-2V5h2V7z M16,10v4h4v-4H16z M19,13h-2v-2h2V13z M10,4v4h4V4H10z M13,7h-2V5h2V7z M10,10v4h4v-4H10z M13,13h-2v-2h2V13z M16,16v4h4v-4H16z M19,19h-2v-2h2V19z M10,16v4h4v-4H10z M13,19h-2v-2h2V19z M4,4v4h4V4H4z M7,7H5V5h2V7z M4,10 v4h4v-4H4z M7,13H5v-2h2V13z M4,16v4h4v-4H4z M7,19H5v-2h2V19z"></path>
          </g>
        </svg>
      );
      break;
    case "notification":
      icon = (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <g>
            <path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"></path>
          </g>
        </svg>
      );
      break;

    case "prev":
      icon = (
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <path
            class="ytp-svg-fill"
            d="m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z"
            id="ytp-id-10"
          ></path>
        </svg>
      );
      break;
    case "play":
      icon = (
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <path
            class="ytp-svg-fill"
            d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"
            id="ytp-id-78"
          ></path>
        </svg>
      );
      break;

    case "next":
      icon = (
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <path
            class="ytp-svg-fill"
            d="M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"
            id="ytp-id-12"
          ></path>
        </svg>
      );
      break;
    case "mute":
      icon = (
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <path
            class="ytp-svg-fill ytp-svg-volume-animation-speaker"
            clip-path="url(#ytp-svg-volume-animation-mask)"
            d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
            id="ytp-id-14"
          ></path>
        </svg>
      );
      break;
    case "muted":
      icon = (
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <path
            class="ytp-svg-fill"
            d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"
            id="ytp-id-74"
          ></path>
        </svg>
      );
      break;
    case "subtitles":
      icon = (
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <path
            d="M11,11 C9.89,11 9,11.9 9,13 L9,23 C9,24.1 9.89,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M17,17 L15.5,17 L15.5,16.5 L13.5,16.5 L13.5,19.5 L15.5,19.5 L15.5,19 L17,19 L17,20 C17,20.55 16.55,21 16,21 L13,21 C12.45,21 12,20.55 12,20 L12,16 C12,15.45 12.45,15 13,15 L16,15 C16.55,15 17,15.45 17,16 L17,17 L17,17 Z M24,17 L22.5,17 L22.5,16.5 L20.5,16.5 L20.5,19.5 L22.5,19.5 L22.5,19 L24,19 L24,20 C24,20.55 23.55,21 23,21 L20,21 C19.45,21 19,20.55 19,20 L19,16 C19,15.45 19.45,15 20,15 L23,15 C23.55,15 24,15.45 24,16 L24,17 L24,17 Z"
            id="ytp-id-16"
          ></path>
        </svg>
      );
      break;
    case "settings":
      icon = (
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <path
            d="m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z"
            id="ytp-id-18"
          ></path>
        </svg>
      );
      break;
    case "miniplayer":
      icon = (
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <path
            d="M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z"
            id="ytp-id-21"
          ></path>
        </svg>
      );
      break;
    case "size":
      icon = (
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <path
            d="m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z"
            fill-rule="evenodd"
            id="ytp-id-22"
          ></path>
        </svg>
      );
      break;
    case "fullscreen":
      icon = (
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <g class="ytp-fullscreen-button-corner-0">
            <path
              class="ytp-svg-fill"
              d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"
              id="ytp-id-6"
            ></path>
          </g>
          <g class="ytp-fullscreen-button-corner-1">
            <path
              class="ytp-svg-fill"
              d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"
              id="ytp-id-7"
            ></path>
          </g>
          <g class="ytp-fullscreen-button-corner-2">
            <path
              class="ytp-svg-fill"
              d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"
              id="ytp-id-8"
            ></path>
          </g>
          <g class="ytp-fullscreen-button-corner-3">
            <path
              class="ytp-svg-fill"
              d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"
              id="ytp-id-9"
            ></path>
          </g>
        </svg>
      );
      break;
    case "pause":
      icon = (
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <path
            class="ytp-svg-fill"
            d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"
            id="ytp-id-69"
          ></path>
        </svg>
      );
      break;
    default:
      icon = "";
  }
  // icon = "";
  return <div className={classes}>{icon}</div>;
};

export default Icon;
