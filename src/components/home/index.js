import React from 'react';
import Header from '../header';
import Recipes from '../recipes';

const Home = props => {
  return (
    <React.Fragment>
      <Header />
      {/* {isLoading ? <div>loading...</div> : props.children} */}
      {/* {props.children} */}
      <Recipes />
    </React.Fragment>
  );
};

export default Home;
