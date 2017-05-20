import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageRotator extends Component {
  constructor(props) {
    super(props);

    this.divDOMNode = null;
    this.state = {
      imageLoaded: false,
      imageError: false,
    };
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

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps: ', nextProps);
    // There's a bug here when the image is from the sports category. What is it?
    this.setState({ imageLoaded: false, imageError: false });
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate: ', nextProps, nextState);
    // What happens if you call setState here?
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: ', prevProps, prevState);
  }

  handleImageLoaded = () => {
    this.setState({ imageLoaded: true, imageError: false });
  }

  handleImageError = () => {
    this.setState({ imageLoaded: false, imageError: true });
  }

  render() {
    const { imageLoaded, imageError } = this.state;
    const { imageSource } = this.props;
    const currentStatus = imageError ? 'Error'
                          : imageLoaded ? 'Loaded' : 'Loading';

    return (
      <div>
        <img src={imageSource} onLoad={this.handleImageLoaded} onError={this.handleImageError} alt='' />
        <p>
          Image status: {imageSource ? currentStatus : 'Pick an image'}
        </p>
      </div>
    );
  }
}

ImageRotator.propTypes = {
  imageSource: PropTypes.string.isRequired,
};

export default ImageRotator;
