import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageRotator extends Component {
  constructor(props) {
    super(props);

    this.imageDOMNode = null;
    this.state = {
      imageLoaded: false,
      imageError: false,
    };
  }

  componentWillMount() {
    console.log('componentWillMount: DOM node is currently: ', this.imageDOMNode);
  }

  componentDidMount() {
    // What is wrong with this console.log?
    console.log('componentDidMount: DOM node is currently: ', this.imageDOMNode);
    if(this.imageDOMNode) { this.imageDOMNode.src = 'https://react-etc.net/files/2016-07/logo-578x270.png'; }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: DOM node is currently: ', this.imageDOMNode);
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

  captureImageRef = (ref) => {
    this.imageDOMNode = ref;
  }

  renderImageList = (images: Array<>) => {
    // This produces a React warning on the console
    return images.map((img) => {
      return <img src={img} alt='' />;
    });
  }

  render() {
    const { imageLoaded, imageError } = this.state;
    const { imageSource } = this.props;
    const currentStatus = imageError ? 'Error'
                          : imageLoaded ? 'Loaded' : 'Loading';
    const imageList = [imageSource, imageSource, imageSource];

    return (
      <div>
        <img ref={this.captureImageRef} src={imageSource} onLoad={this.handleImageLoaded} onError={this.handleImageError} alt='' />
        <p>
          Image status: {imageSource ? currentStatus : 'Pick an image'}
        </p>
        <div>
          {this.renderImageList(imageList)}
        </div>
      </div>
    );
  }
}

ImageRotator.propTypes = {
  imageSource: PropTypes.string.isRequired,
};

export default ImageRotator;
