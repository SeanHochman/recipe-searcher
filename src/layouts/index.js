import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const DefaultLayout = props => {
  const { children } = props;
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default DefaultLayout;
