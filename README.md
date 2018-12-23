# react-anti-wechat-form

创建“反微信”表单元素，解决意料之外的界面问题

## Problem(s)

- 软键盘收回后，整个页面停留在原处，浏览器底部出现大段空白 (iOS 12.1+ &amp; WeChat 6.7.4+)

## Usage

在所有会触发软键盘的表单元素（组件）外包一层 `fight()` 方法，此方法由 `<AntiWechatForm />` 提供

### Install

```
npm i -S react-anti-wechat-form
```

### Show you the code

```js
import React from 'react';
import AntiWechatForm from 'react-anti-wechat-form';

const CustomInput = props => (
  <div className="custom-input">
    <input onFocus={props.onFocus} onBlur={props.onBlur} />
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <AntiWechatForm>
          {fight => (
            <div>
              {fight(<input type="text" />)}
              {fight(
                <select>
                  <option value="1">pick me</option>
                  <option value="2">pick me</option>
                </select>
              )}
              {fight(<textarea />)}
              {fight(<CustomInput />)}
            </div>
          )}
        </AntiWechatForm>
      </div>
    );
  }
}
```

## Behind the Scene

`fight` 方法使用 `React.cloneElement` 对传入的元素的 `onFoucs`, `onBlur` 进行修改，在表单元素获得焦点和失去焦点的时候自动进行额外的处理。

```js
// ... part of source code ...
fight = elem => {
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
// ... part of source code ...
```
