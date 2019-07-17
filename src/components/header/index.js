import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { dictionaryActions, clearResults } from '../../actions/search';
import { Row } from 'react-flexbox-grid';

import { Head, HeadCell, TagLine } from './styled';

const mapDispatchToProps = dispatch => ({
  dictionaryAction: bindActionCreators(dictionaryActions, dispatch),
  goHome: bindActionCreators(clearResults, dispatch)
});

const Header = props => {
  const { goHome } = props;
  return (
    <Head>
      <Row>
        <NavLink to="/" onClick={() => goHome()}>
          <HeadCell>Home</HeadCell>
        </NavLink>
        <NavLink to="/search" onClick={() => goHome()}>
          <HeadCell>Searchr</HeadCell>
        </NavLink>
      </Row>
      <TagLine>Whats for dinner, bitch?</TagLine>
    </Head>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
