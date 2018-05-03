import React from 'react';
import axios from 'axios';
import JobsForUser from './jobsForUser.jsx';
import Search from './Search.jsx';
import UserInfo from './UserInfo.jsx';
import Pmessage from './profilemessage.jsx';
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      jobs: [],
      user:[],
      username:''
    }
  }

//make new get requests for each filter
  componentDidMount() {
    axios.get('/userJobs')
      .then(response => {
        const posts = response.data;
        this.setState({jobs:posts});
      })
      .catch(function (error) {
        console.log(error);
      });
    this.getUserInfo();
  }

  getUserInfo(){
    axios.get('/userInfo')
      .then(response => {
        const posts = response.data;
        console.log(posts);
        this.setState({user:posts});
        this.setState({username:posts.userName})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    var username1=this.state.username;
    console.log('inside the render ',this.state.username)
    var arr = [];
    this.state.jobs.forEach(function(item, index) {
      arr.push(<JobsForUser item={item} key={index}/>)
    })
    return (
      <div>
        <br/>
        <div>
          <UserInfo user={this.state.user}/>
        </div>
        <div>
          {arr}
        </div>
        <br /><br />
        <Pmessage username={this.state.username}/>
      </div>
    )
  }
}
export default Profile;