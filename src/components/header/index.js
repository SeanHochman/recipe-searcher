import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dictionaryActions } from '../../actions/search';

import { Head, HeadCell } from './styled';

const mapDispatchToProps = dispatch => ({
  dictionaryAction: bindActionCreators(dictionaryActions, dispatch)
});

const Header = props => {
  return (
    <Head>
      <HeadCell>Recipe Searcher</HeadCell>
    </Head>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
