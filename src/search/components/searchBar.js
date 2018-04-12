import React, { Component } from 'react';
import { positionsTypes } from '../constants'
import './styles.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      position: 'default',
      type: 'none'
    };
  }

  handleChange = (event) => {
    let defaultState = { name: '', age: '', position: 'default' };
    let value = event.target.value;
    let name = event.target.name;
    if (name === 'name') {
      value = event.target.value.replace(/[^a-zA-Z]+/g, '');
      this.setState({...defaultState, name: value, type: 'name'});
    } else if (name === 'age') {
      value = event.target.value.replace(/[^0-9]+/g, '').substring(0, 2);
      this.setState({...defaultState, age: value, type: 'age'});
    } else if (name === 'position') {
      this.setState({...defaultState, position: value, type: 'position'});
    } else {
      this.setState({[event.target.name]: value});
    }
  }

  handleSubmit = (event) => {
    const { name, age, position, type } = this.state;
    if (type !== 'none') {
      this.props.onSearchChange(name, age, position, type);
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Player Name" value={this.state.name} onChange={this.handleChange} />
          <div className="select">
            <select name="position" value={this.state.position} onChange={this.handleChange}>
              <option value="default" disabled>Position</option>
              {
                positionsTypes.map((data, index) => {
                  return <option key={index} value={data}>{data}</option>
                })
              }
            </select>
            <div className="select_arrow"/>
          </div>
          <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange}/>
          <input type="submit" value="Search" className="searchButtom" />
        </form>
      </div>
    );
  }
}
