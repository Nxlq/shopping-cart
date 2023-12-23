import { Link } from "react-router-dom";
import "/src/styles/ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>Sorry, this page isn&apos;t available.</h1>
      <p>
        The link you followed may be broken, or the page may have been removed
      </p>
      <Link to="/">Click here to go back to the Home Page</Link>
    </div>
  );
}

export default ErrorPage;
