import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import search from './search'
const { SearchBar, PlayersGrid } = search.components;
const { fetchingPlayers, onFilteredByKeywords, onFilteredByAge, onFilteredByPosition, onResetFilters } = search.actions;
const { onSearch } = search.selectors;

export class App extends Component {

  componentWillMount(){
    this.props.fetchingPlayers();
  }

  render() {
    const { data, footballPlayers } = this.props;
    if (data.error) {
      return (
        <div className="error">
          <h3> There was a problem trying to get the data. </h3>
            <button onClick={() => this.props.fetchingPlayers()} className="botonReload">
              Retry
            </button>
        </div>
      );
    }
    return (
      <div>
        <header>
          <h1>Football Player Finder</h1>
        </header>
        <SearchBar onSearchChange={this.handleSearchChange} />
        <PlayersGrid data={footballPlayers} resetFilters={this.onResetFiltersCallBack} />
      </div>
    );
  }

  handleSearchChange = (filterName, filterAge, filterPosition, type) => {
    switch (type) {
      case 'age':
        return this.props.onFilteredByAge(filterAge);
      case 'name':
        return this.props.onFilteredByKeywords(filterName);
      case 'position':
        return this.props.onFilteredByPosition(filterPosition);
      default:
        return null;
    }
  }

  onResetFiltersCallBack = () => {
    this.props.onResetFilters();
  }
}

App.propTypes = {
  fetchingPlayers: PropTypes.func.isRequired,
  onFilteredByKeywords: PropTypes.func.isRequired,
  onFilteredByAge: PropTypes.func.isRequired,
  onFilteredByPosition: PropTypes.func.isRequired,
  onResetFilters: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    data: state.search,
    footballPlayers: onSearch(state.search)
  }
}

function Actions(dispatch) {
  return {
    fetchingPlayers: () => dispatch(fetchingPlayers()),
    onFilteredByKeywords: (keywords) => dispatch(onFilteredByKeywords(keywords)),
    onFilteredByPosition: (position) => dispatch(onFilteredByPosition(position)),
    onFilteredByAge: (age) => dispatch(onFilteredByAge(age)),
    onResetFilters: () => dispatch(onResetFilters())
  };
}

export default connect(mapStateToProps, Actions)(App)
