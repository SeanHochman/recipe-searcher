import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { dictionaryActions } from '../../actions/search';
import { Row } from 'react-flexbox-grid';

import { Head, HeadCell } from './styled';

const mapDispatchToProps = dispatch => ({
  dictionaryAction: bindActionCreators(dictionaryActions, dispatch)
});

const Header = props => {
  return (
    <Head>
      <Row>
        <Link to="/">
          <HeadCell>Recipe Searcher</HeadCell>
        </Link>
        <Link to="/other">
          <HeadCell>Other</HeadCell>
        </Link>
      </Row>
    </Head>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
