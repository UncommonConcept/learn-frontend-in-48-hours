import React from 'react';

const LinkComponent = (props) => {
  const { href, children, target='_blank' } = props;
  return <a href={href} target={target}>{children}</a>;
};

export default LinkComponent;
