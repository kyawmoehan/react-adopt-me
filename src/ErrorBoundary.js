import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          Something went wrong.
          <Link to="/">Click Here or wait 5 seceonds</Link>
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
