import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dictionaryActions } from '../../actions/request';
import { recipeDictionary } from '../../dictionaries/recipe';

import { Head, HeadCell } from './styled';

const mapDispatchToProps = dispatch => ({
  dictionaryAction: bindActionCreators(dictionaryActions, dispatch)
});

const Header = props => {
  const { dictionaryAction } = props;
  console.log('recipe object', recipeDictionary.recipeSearch);
  return (
    <Head>
      <HeadCell>
        <button
          onClick={() =>
            dictionaryAction.get(recipeDictionary.recipeSearch, {
              params: { searchTerms: 'chicken' }
            })
          }
        >
          click me
        </button>
      </HeadCell>
    </Head>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
