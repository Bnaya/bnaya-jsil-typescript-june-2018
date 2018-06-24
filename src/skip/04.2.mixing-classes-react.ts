import React from "react";

@withResizerHandler
class MyComponent extends React.Component<
  // props interface
  {},
  // state interface
  { windowSize: { width: number; height: number } | null }
> {
  // initial state
  public state = { windowSize: null };

  handleResize(e: UIEvent) {
    this.setState({
      windowSize: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  }
}

type ConstructorType<T> = new (...args: any[]) => T;

interface IResizeHandler {
  handleResize(e: UIEvent): void;
}
export function withResizerHandler<
  // checkout the generic constraint here
  // it must be a react component, and have the handleResize method
  T extends ConstructorType<React.Component<any> & IResizeHandler>
>(Base: T) {
  return class extends Base {
    public componentDidMount() {
      window.addEventListener("resize", this.handleResize);

      if (super.componentDidMount) {
        super.componentDidMount();
      }
    }

    public componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);

      if (super.componentWillUnmount) {
        super.componentWillUnmount();
      }
    }
  };
}
