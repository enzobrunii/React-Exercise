import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingPlayers } from './actions';
import SearchBar from './components/searchBar';
import PlayersGrid from './components/playersGrid';

import './styles.css';

class Search extends Component {

  componentWillMount(){
    this.props.fetchingPlayers();
  }

  render() {
    const { searchData } = this.props;
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Football Player Finder</h1>
        </header>
        <SearchBar />
        <PlayersGrid data={searchData.footballPlayers} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchData: state.search
  }
}

function Actions(dispatch) {
  return {
    fetchingPlayers: () => dispatch(fetchingPlayers()),
  };
}

export default connect(mapStateToProps, Actions)(Search)
