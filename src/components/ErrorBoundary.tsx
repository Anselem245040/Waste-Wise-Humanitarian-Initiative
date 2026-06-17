import React from "react";

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any, info: any) {
    console.error("ErrorBoundary caught", error, info);
  }
  render() {
    if (this.state.hasError)
      return <div className='p-8'>An error occurred.</div>;
    return this.props.children as any;
  }
}
