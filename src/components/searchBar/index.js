import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dictionaryActions } from '../../actions/search';
import { recipeDictionary } from '../../dictionaries/recipe';
import { ResultsPer } from '../../constants/enum';

import { SearchContainer, SearchField, HowMany, HowManyOpt } from './styled';

const mapDispatchToProps = dispatch => ({
  dictionaryAction: bindActionCreators(dictionaryActions, dispatch)
});

const SearchBar = ({ dictionaryAction }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [resultsPer, setResultsPer] = useState(10);

  const handleSubmit = () => {
    dictionaryAction.get(recipeDictionary.recipeSearch, {
      params: { searchTerms: searchTerm },
      extras: { resultsPer: `to=${resultsPer}` }
    });
  };
  const handleEnter = e => {
    if (e.which === 13) {
      handleSubmit();
    }
  };

  const options = ResultsPer.map((opt, i) => (
    <HowManyOpt key={i} value={opt.value}>
      {opt.label}
    </HowManyOpt>
  ));

  return (
    <SearchContainer>
      <SearchField
        type="input"
        value={searchTerm}
        placeholder="search by ingredient"
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={handleEnter}
      />
      <HowMany
        onChange={e => setResultsPer(e.target.value)}
        onKeyDown={handleEnter}
      >
        {options}
      </HowMany>
    </SearchContainer>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
