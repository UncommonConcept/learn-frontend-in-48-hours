import React, { Component } from 'react';

export default class ImageRotator extends Component {
  constructor(props) {
    super(props);

    this.divDOMNode = null;
    this.state = {};
  }

  componentWillMount() {
    console.log('componentWillMount: DOM node is currently: ', this.divDOMNode);
  }

  componentDidMount() {
    console.log('componentDidMount: DOM node is currently: ', this.divDOMNode);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: DOM node is currently: ', this.divDOMNode);
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps: ', nextProps, nextState);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate: ', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: ', prevProps, prevState);
  }

  render() {
    return (
      <div>
        <img src={""} alt='' />
      </div>
    );
  }
}