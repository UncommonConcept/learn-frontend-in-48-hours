import React from 'react';

const PicComponent = (props) => {
  const { src } = props;
  return <div className='pic-component-container'><img src={src} alt='' /></div>;
};

export default PicComponent;
