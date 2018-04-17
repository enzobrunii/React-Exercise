import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class PlayersGrid extends Component {

  renderResults(results){
    return (
      <tbody>
      {
        results.map((data, index) => {
          return (
            <tr key={index}>
              <th> {data.name} </th>
              <th> {data.position} </th>
              <th> {data.nationality} </th>
              <th> {data.age} </th>
            </tr>
          );
        })
      }
      </tbody>
    );
  }

  noResultsMsg(){
    return (
      <div className="error">
        <h3> There are no results to show. </h3>
          <button onClick={() => this.props.resetFilters()} className="botonReload">
            Clear Filters
          </button>
      </div>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr className="head">
              <th>Player</th>
              <th>Position</th>
              <th>Team</th>
              <th>Age</th>
            </tr>
          </thead>
          { data ? this.renderResults(data) : null }
        </table>
        { (data === undefined || data.length === 0) ? this.noResultsMsg() : null }
      </div>
    );
  }
}

PlayersGrid.propTypes = {
  data: PropTypes.array,
  resetFilters: PropTypes.func.isRequired
};
