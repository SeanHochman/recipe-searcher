import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
        <NavLink to="/">
          <HeadCell>Recipe Searcher</HeadCell>
        </NavLink>
        <NavLink to="/other">
          <HeadCell>Other</HeadCell>
        </NavLink>
      </Row>
    </Head>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
