import ytLogoImg from "../images/yt-logo.svg";

const Brand = () => {
  return (
    <div className="yt-logo">
      <a href="/" className="yt-logo-link">
        <img src={ytLogoImg} alt="Logo" />
      </a>
      <span className="yt-logo-text">pl</span>
    </div>
  );
};

export default Brand;
