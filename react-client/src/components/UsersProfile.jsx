import React from 'react';
import { PanelGroup, Panel, Button, Well, FormControl } from 'react-bootstrap';
import $ from 'jquery'

class UsersProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:[],
    }
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    console.log("hi")
    var that = this;
    var user = this.props.match.params.username
    console.log(user)
    $.ajax({
      url: `/useri/${user}`,
      method: 'GET',
    })
    .done (function (data) {
      console.log(data)
      that.setState({
        user: data
      });
    })
    .fail(function( jqXHR, textStatus ) {
      alert( "No user Found");
    });
  }

  render() {
    return(
      <h1>Hello</h1>
    )
  }
}
export default UsersProfile;