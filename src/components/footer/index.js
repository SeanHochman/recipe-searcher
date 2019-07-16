import React from 'react';
import { Link } from 'react-router-dom';

import { Foot, HomeLink } from './styled';

const Footer = () => {
  return (
    <Foot>
      <Link to="/">
        <HomeLink>Back to home</HomeLink>
      </Link>
    </Foot>
  );
};

export default Footer;
