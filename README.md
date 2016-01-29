# react-stylish

> Make your React component style-able by all.

## Guide

React users have many different ways for styling their components. A mix between
using good ole classNames and a million different ways of specifying inline
styles.

If you're trying to make a general purpose React Component and want to allow
your users to style it however they please, you can use this tiny little module
and forget about it.

Basically you accept a `styles` prop, which is an object of either classNames or
inline styles. Then you just pass the result over to your elements and move on.

If you are using the
[ES7 object spread operator](https://github.com/sebmarkbage/ecmascript-rest-spread)
it's as simple as this:

```js
import {getStyles} from 'react-stylish';

class MyComponent extends React.Component {
  render() {
    const {myElement} = getStyles(this.props.styles);
    return <div {...myElement}/>;
  }
}
```

> _Enable this in Babel by using either `babel-preset-stage-2` or
> `babel-plugin-transform-object-rest-spread`._

If you are not using the spread operator you can use:

```js
import {getStyles} from 'react-stylish';

class MyComponent extends React.Component {
  render() {
    const {myElement} = getStyles(this.props.styles);
    return <div className={myElement.className} style={myElement.styles}/>;
  }
}
```

Don't forget about validating `PropTypes`! You can accept an object with any
keys or you can specify the exact keys you want to allow.

```js
import {PropType} from 'react-stylish';

class MyComponent extends React.Component {
  static propTypes = {
    // this will accept any keys:
    styles: PropType

    // or if you want to validate the exact keys to accept:
    styles: PropType.only(['myElement', 'otherElement'])

    // and if you want to make it required:
    styles: PropType.only(['myElement', 'otherElement']).isRequired
  };
}
```

## Install

```
$ npm install --save react-stylish
```

## Usage

Setup your component like this:

```js
import React from 'react';
import {getStyles, PropType} from 'react-stylish';

export class MyComponent extends React.Component {
  static propTypes = {
    styles: PropType.only(['foo', 'bar']).isRequired
  };

  render() {
    const styles = getStyles(this.props.styles);
    return (
      <div {...styles.foo}>
        <div {...styles.bar}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
```

and users will consume it like this:

```js
import MyComponent from 'my-component';

export default class CustomComponent extends React.Component {
  render() {
    return (
      <MyComponent styles={{
        foo: 'a-nice-class-name',
        bar: {
          background: 'red',
          color: 'blue'
        }
      }}/>
    );
  }
}
```

## License

MIT © [James Kyle](http://twitter.com/thejameskyle)
