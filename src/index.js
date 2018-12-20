import React from 'react';

class RobustFormControl extends React.Component {
  constructor(props) {
    super(props);
    this.hasFocus = false;
    this.scrollPos = {
      top: 0,
      left: 0
    };
  }

  robust = elem => {
    return React.cloneElement(elem, {
      onFocus: (...args) => {
        this._focus(...args);
        elem.props.onFocus && elem.props.onFocus(...args);
      },
      onBlur: (...args) => {
        this._blur(...args);
        elem.props.onBlur && elem.props.onBlur(...args);
      }
    });
  };

  _focus = () => {
    this.scrollPos = {
      top: document.documentElement.scrollTop,
      left: document.documentElement.scrollLeft
    };
    this.hasFocus = true;
  };

  _blur = () => {
    this.hasFocus = false;
    setTimeout(() => {
      if (!this.hasFocus) {
        // havn't figure out the perfect solution, hit me a pull request
        // document.documentElement.scrollTop = this.scrollPos.top;
        // document.documentElement.scrollLeft = this.scrollPos.left;
        // document.documentElement.scrollTop = 0;
        // document.documentElement.scrollLeft = 0;
        window.scrollTo(0, 0);
      }
    }, 100);
  };

  render() {
    return this.props.children && this.props.children(this.robust);
  }
}

export default RobustFormControl;