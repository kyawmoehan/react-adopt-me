import React from "react";
import { Link } from "@reach/router";

function NotFoundPage() {
  return (
    <div>
      <h1>404:Page Not Found!</h1>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default NotFoundPage;
