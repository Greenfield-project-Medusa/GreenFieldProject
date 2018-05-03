import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';

 
class Rate extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      user:[],
      rating: 0
    };
    this.getRate = this.getRate.bind(this)
  }

  componentDidMount() {
    this.getRate();
  }
 
  getRate(){
    var that=this;
    axios.get(`/useri/${this.props.user}`)
    .then(response => {
      var data = response.data;
      var rate = data.rate
      var result = 0 ;
      for(var i = 0 ; i < rate.length ; i++) {
        result+= rate[i];
      }
      var average = (result / rate.length);
      that.setState({
        user:data,
        rating : average
      })
    })
    .catch(function (error){
      console.log(error)
    })
  }

  updateRate(user){
    var that=this;
    axius.post('/postRate')
    .then(response => {
      var data=response.data;
      this.setState({
        user:data
      })
    })
    .catch(function(error){
      console.log(error)
    })
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    if (this.state.user.length === 0){
      var rating = this.state.rating ;
    } else {
      var rating = this.state.rating ;
    }
    return (                
      <div>
        <p>Rating : {rating}</p>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default Rate; 