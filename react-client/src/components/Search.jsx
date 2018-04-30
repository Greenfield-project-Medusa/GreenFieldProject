import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem } from "react-bootstrap";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      val: '',
      loc:''
    };

    this.handleCategoryChange  = this.handleCategoryChange.bind(this);
    this.handleInputChange  = this.handleInputChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleInputChange(e) {
    this.props.searchJobTitle(e.target.value)
    this.setState({
      value: e.target.value
    });
  }

  handleCategoryChange(e){
    this.props.searchJobCategory(e.target.value)
    this.setState({
      val: e.target.value
    });
  }
  handleLocationChange(e){
    this.props.searchJobLocation(e.target.value)
    this.setState({
      loc: e.target.value
    });
  }

  render() {
    return (
      <div id="catagory" className="search-bar form-inline container">  

      <div className="form-group">
        <select id="catB" onChange={this.handleCategoryChange} value={this.state.val} className="form-control selectpicker btn btn-info">
          <option value="All">Select Category</option>
          <option value="Driver">Driver</option>
          <option value="Home Maintenance">Home Maintenance</option>
          <option value="Computer Maintenance">Computer Maintenance</option>
          <option value="Babysitting">Babysitting</option>
          <option value="Tutoring">Tutoring</option>
        </select>
        </div>

        <div className="form-group">
          <select className="form-control selectpicker btn btn-default" id="catJ" onChange={this.handleLocationChange} value={this.state.loc}>
              <option value="All">All Locations</option>
              <option value="Amman">Amman</option>
              <option value="Irbid">Irbid</option>
              <option value="Zarqa">Zarqa</option>
              <option value="Jerash">Jerash</option>
              <option value="Aqaba">Aqaba</option>
          </select>
        </div>

      <FormControl
          id='catI'
          className="Sform-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
          placeholder="Job Title"
        />
        <br /><br />
      </div>
    );
  }
}


export default Search;