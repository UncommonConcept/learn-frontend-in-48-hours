import React from 'react';
import LinkComponent from './LinkComponent';
import PicComponent from './PicComponent';
import './Avatar.css';

const Avatar = (props) => {
  const { user } = props;

  return (
    <div className='avatar-box'>
      <LinkComponent href={'https://reddit.com/u/' + user}>
        <PicComponent src='http://placehold.it/128x128' />
      </LinkComponent>
    </div>
  );
};

export default Avatar;
