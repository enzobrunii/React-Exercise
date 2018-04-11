import React, { Component } from 'react';
import '../styles.css';

export default class PlayersGrid extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {
          data.map((data, index) => {
            return <p key={index}> {data.name} </p>
          })
        }
      </div>
    );
  }
}
