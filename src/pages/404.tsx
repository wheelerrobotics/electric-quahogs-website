import * as React from "react";
import { Link } from "gatsby";

// styles
/* const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
 */
// markup
const NotFoundPage = () => {
  return (
    <main>
      <title>Page Not Found</title>
      <p>
        If this inconvinienced you, please send <a>William.Kopans@colby.edu</a>{" "}
        a very angry email
      </p>
      <Link to="/">Go home</Link>
    </main>
  );
};

export default NotFoundPage;
