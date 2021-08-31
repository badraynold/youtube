import ytLogoImg from "../images/yt-logo.svg";

const Brand = (props) => {
  const classes = props.className ? "yt-logo " + props.className : "yt-logo";
  return (
    <div className={classes}>
      <a href="/" className="yt-logo-link">
        <img src={ytLogoImg} alt="Logo" />
      </a>
      <span className="yt-logo-text">lokalnie</span>
    </div>
  );
};

export default Brand;
