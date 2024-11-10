import React from "react";

function ErrorPage({ message }) {
  return (
    <div className="error-page">
      <h2>Oops! Something went wrong.</h2>
      <p>{message || "An unexpected error occurred."}</p>
    </div>
  );
}

export default ErrorPage;





