import React from 'react';
import LinkComponent from './LinkComponent';
import PicComponent from './PicComponent';
import './Avatar.css';

const Avatar = (props) => {
  const { link, image } = props;

  return (
    <div className='avatar-box'>
      <LinkComponent href={link} target='_blank'>
        <PicComponent src={image} />
      </LinkComponent>
    </div>
  );
};

export default Avatar;
