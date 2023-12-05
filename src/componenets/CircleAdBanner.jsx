import "/src/styles/CircleAdBanner.css";

function CircleAdBanner() {
  return (
    <div className="circle-ad-banner">
      <div className="circle-ad-text">
        <h2 className="ad-header">
          Get access to hundreds of deals,<br></br> plus offers just for you
        </h2>
        <h3>
          You&apos;re invited to join{" "}
          <div>
            <span className="circle-text">
              <img src="/Target_Bullseye-Logo_Red_transparent.png" alt="" />
              circle
            </span>
          </div>
        </h3>
      </div>
      <div className="circle-ad-right">
        <div className="rounded-edge"></div>
        <img src="/trg.png" alt="" />
      </div>
    </div>
  );
}

export default CircleAdBanner;
