import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dictionaryActions } from '../../actions/search';
import { recipeDictionary } from '../../dictionaries/recipe';
import { Row, Column, Grid } from 'react-flexbox-grid';
import { SearchContainer, SearchField } from './styled';

const mapDispatchToProps = dispatch => ({
  dictionaryAction: bindActionCreators(dictionaryActions, dispatch)
});

const SearchBar = props => {
  const { dictionaryAction } = props;
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = () => {
    dictionaryAction.get(recipeDictionary.recipeSearch, {
      params: { searchTerms: searchTerm }
    });
  };
  const handleKeyDown = e => {
    if (e.which === 13) {
      handleSubmit();
    }
  };
  return (
    <SearchContainer>
      <SearchField
        type="input"
        value={searchTerm}
        placeholder="search by ingredient"
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {/* <input type="submit" value="Search" onClick={handleSubmit} /> */}
    </SearchContainer>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
