import type { ErrorInfo } from "react";
import React from "react";

import { NotificationToast, NotificationToastContainer, NotificationToastType } from "./NotificationToast";

interface AppErrorBoundaryState {
  hasError: boolean;
}

/**
 * @see https://reactjs.org/docs/error-boundaries.html
 */
export class AppErrorBoundary extends React.Component<{}, AppErrorBoundaryState> {
  constructor(props: never) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // TODO: log error here
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <NotificationToastContainer>
          <NotificationToast
            message="Oops! Something went wrong. Please reload the page."
            type={NotificationToastType.Error}
          />
        </NotificationToastContainer>
      );
    }

    return this.props.children;
  }
}
