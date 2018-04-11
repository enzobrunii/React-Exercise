import React, { Component } from 'react';
import { positionsTypes } from '../constants'
import '../styles.css';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form className="Search-Bar">
          <input type="text" name="name" placeholder="Player Name"/>
          <select defaultValue="default">
            <option value="default" disabled>Position</option>
            {
              positionsTypes.map((data, index) => {
                return <option key={index} value={data}>{data}</option>
              })
            }
          </select>
          <input type="text" name="name" placeholder="Age"/>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
