import { useRouteError } from "react-router-dom";
import React from 'react'

function ErrorPage() {
const error = useRouteError();

  return (
    <div id="error-page">
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>
      <i>NOT FOUND</i>
    </p>
  </div>
  )
}

export default ErrorPage