import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { dictionaryActions } from '../../actions/search';

import { Head, HeadCell } from './styled';

const mapDispatchToProps = dispatch => ({
  dictionaryAction: bindActionCreators(dictionaryActions, dispatch)
});

const Header = props => {
  return (
    <Head>
      <Link to="/">
        <HeadCell>Recipe Searcher</HeadCell>
      </Link>
    </Head>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
