import "/src/styles/CardAdBanner.css";

function CardAdBanner() {
  return (
    <div className="card-ad-banner">
      <div className="card-ad-text">
        <h2 className="card-header ad-header">
          <span>Save 5%</span>
          <span className="dark-gray">Get More</span>
          <span className="gray">Every Day. **</span>
        </h2>
        <h3>In store & online.</h3>
        <div className="card-message">
          <span className="card-text">
            <img src="/Target_Bullseye-Logo_Red_transparent.png" alt="" />
            RedCard
          </span>
          <span className="dark-gray">
            <b>savings add up so you can get more from every Target run.</b>
          </span>
        </div>
      </div>
      <div className="card-ad-right">
        <div className="rounded-edge"></div>
        <img src="/crd.png" alt="" />
      </div>
    </div>
  );
}

export default CardAdBanner;
