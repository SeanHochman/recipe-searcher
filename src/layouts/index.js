import React from 'react';
import Header from '../components/header';

const DefaultLayout = props => {
  const { children } = props;
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default DefaultLayout;
