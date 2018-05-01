import React from 'react';
import { PanelGroup, Panel, Button, Well, FormControl, Row, Col, Thumbnail } from 'react-bootstrap';
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
      <div className = 'container'>
      <br />
        <div className = 'outerBorder'>
          <Row>
            <Col md={3}>
              <Thumbnail src="http://www.redactorpublishing.com/gallery/avatar.png" height="250px">
                <h3>{this.state.user.name}</h3>
                <p>{this.state.user.nationality}</p>
                <p>
                  here for rating
                </p>
              </Thumbnail>
            </Col>
            <Col md={9}>
              <Thumbnail>
                <h3>{this.state.user.name}</h3>
                <p>{this.state.user.nationality}</p>
                <p>
                  here for rating
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default UsersProfile;