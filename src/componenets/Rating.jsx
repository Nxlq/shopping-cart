import PropTypes from "prop-types";
import "/src/styles/ProductPage.css";

function StarSvg({ fillPercent, starPos }) {
  return (
    <svg
      className="rating-symbol"
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <defs>
        <linearGradient id={"half" + starPos}>
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset={`${fillPercent}`} stopColor="#ffd700" />
          <stop offset={`${fillPercent}`} stopColor="white" />
          <stop offset="100%" stopColor="white" />
        </linearGradient>
      </defs>

      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path
            fill="#d6a02a"
            d="M49.302,63.999c-0.664,0-1.332-0.164-1.938-0.5l-15.365-8.498l-15.366,8.498 c-1.344,0.742-2.993,0.652-4.243-0.23c-1.25-0.883-1.891-2.403-1.645-3.915l2.981-18.261L1.138,28.185 c-1.047-1.074-1.406-2.641-0.93-4.063c0.477-1.422,1.707-2.457,3.188-2.684l17.237-2.633L28.376,2.31 c0.661-1.407,2.071-2.301,3.622-2.301s2.961,0.895,3.622,2.301l7.743,16.495l17.237,2.633c1.48,0.227,2.711,1.262,3.188,2.684 c0.477,1.423,0.117,2.989-0.93,4.063L50.271,41.093l2.98,18.261c0.246,1.512-0.395,3.032-1.645,3.915 C50.919,63.753,50.11,63.999,49.302,63.999z M31.998,46.43c0.668,0,1.332,0.168,1.938,0.5l10.092,5.579l-1.98-12.119 c-0.203-1.254,0.199-2.527,1.086-3.438l8.563-8.779l-11.654-1.781c-1.316-0.199-2.449-1.043-3.016-2.255l-5.028-10.712 L26.97,24.137c-0.566,1.212-1.699,2.056-3.016,2.255L12.3,28.173l8.563,8.779c0.887,0.91,1.289,2.184,1.086,3.438l-1.98,12.119 l10.092-5.579C30.666,46.598,31.33,46.43,31.998,46.43z"
          ></path>{" "}
          <path
            fill={`url(#${"half" + starPos})`}
            d="M31.998,46.43c0.668,0,1.332,0.168,1.938,0.5l10.092,5.579l-1.98-12.119 c-0.203-1.254,0.199-2.527,1.086-3.438l8.563-8.779l-11.654-1.781c-1.316-0.199-2.449-1.043-3.016-2.255l-5.028-10.712 L26.97,24.137c-0.566,1.212-1.699,2.056-3.016,2.255L12.3,28.173l8.563,8.779c0.887,0.91,1.289,2.184,1.086,3.438l-1.98,12.119 l10.092-5.579C30.666,46.598,31.33,46.43,31.998,46.43z"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
    // <svg
    //   className="rating-symbol"
    //   version="1.0"
    //   id="Layer_1"
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="800px"
    //   height="800px"
    //   viewBox="0 0 64 64"
    //   enableBackground="new 0 0 64 64"
    //   xmlSpace="preserve"
    //   fill="#000000"
    // >
    //   <g id="SVGRepo_bgCarrier" strokeWidth="0" />

    //   <g
    //     id="SVGRepo_tracerCarrier"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <defs>
    //     <linearGradient id={"half" + starPos}>
    //       <stop offset="0%" stopColor="#ffd700" />
    //       <stop offset={`${fillPercent}`} stopColor="#ffd700" />
    //       <stop offset={`${fillPercent}`} stopColor="white" />
    //       <stop offset="100%" stopColor="white" />
    //     </linearGradient>
    //   </defs>

    //   <g id="SVGRepo_iconCarrier">
    //     {" "}
    //     <g>
    //       {" "}
    //       <path
    //         fill="black"
    //         d="M31.998,2.478c0.279,0,0.463,0.509,0.463,0.509l8.806,18.759l20.729,3.167l-14.999,15.38l3.541,21.701 l-18.54-10.254l-18.54,10.254l3.541-21.701L2,24.912l20.729-3.167l8.798-18.743C31.527,3.002,31.719,2.478,31.998,2.478 M31.998,0 c-0.775,0-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343 c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957 c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719 c0.302,0.166,0.636,0.25,0.968,0.25c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704 l14.294-14.657c0.523-0.537,0.703-1.321,0.465-2.031c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15 C33.479,0.448,32.773,0,31.998,0L31.998,0z"
    //       />{" "}
    //       <path
    //         fill={`url(#${"half" + starPos})`}
    //         d="M31.998,2.478c0.279,0,0.463,0.509,0.463,0.509l8.806,18.759l20.729,3.167l-14.999,15.38l3.541,21.701 l-18.54-10.254l-18.54,10.254l3.541-21.701L2,24.912l20.729-3.167l8.798-18.743C31.527,3.002,31.719,2.478,31.998,2.478"
    //       />{" "}
    //     </g>{" "}
    //   </g>
    // </svg>
  );
}

StarSvg.propTypes = {
  fillPercent: PropTypes.number,
};

function Rating({ productRating, amountOfRatings }) {
  let starsToFill = parseFloat(productRating);
  if (isNaN(starsToFill)) return;
  // determines the max amount of stars
  const maxRating = 5.0;

  // arr holding the Svg components to be rendered
  const svgsArr = [];

  // using the iteration to help generate a key for the sake of this project
  let i = 0;

  // filling the svgArr until the max length has been reached and dynamically calculating the fill amount
  while (svgsArr.length < maxRating) {
    console.log({ starsToFill });
    svgsArr.push(
      <StarSvg
        starPos={`${i}`}
        key={`${starsToFill}-${i}`}
        fillPercent={starsToFill < 1 ? starsToFill : 1}
      />
    );
    starsToFill = starsToFill > 1 ? starsToFill - 1 : 0;
    i += 1;
  }

  console.log(svgsArr);
  console.log({ amountOfRatings });

  const questions = (Math.random() * 100).toFixed();

  return (
    <div className="rating">
      <div className="symbols__container">{svgsArr}</div>
      <div className="ratings-info">
        <span className="rating-number">
          {productRating}/{maxRating.toFixed(1)} | {amountOfRatings} reviews
        </span>
        <span className="ratings-questions">{questions} Questions</span>
      </div>
    </div>
  );
}

export default Rating;
