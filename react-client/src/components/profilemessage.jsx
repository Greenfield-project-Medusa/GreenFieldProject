import React from 'react';
import {Button ,Modal} from 'react-bootstrap';
import axios from 'axios';
class Pmessage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			messages:[]
			
		}
		this.show=this.show.bind(this);
		this.handleHide=this.handleHide.bind(this);
	}

	componentDidMount(){

		var that=this;
		
		axios.get('/messages')
		.then(function(response){
			var name=that.props.username;
			that.setState({
				messages:response.data,
			})
			
		})
			

	}

	show(){
		this.setState({
			show:true
		})
		this.setState({
			username:this.props
		})
	}

	handleHide(){
		this.setState({
			show:false
		})

	}

	
	render(){
		var that=this;
	console.log('props',this.props.username)
	var arr = [];
	var newMsg=[];
	var readMsg=[];
	var m=0;
    this.state.messages.forEach(function(item, index) {
    		console.log('1111111111111111',item.username)
	console.log('2222222222222222',that.props.username)
      if(item.username===that.props.username&&!(item.read)){
      newMsg.push(item)
      }
      if(item.username===that.props.username&&item.read &&m<3){
      	readMsg.push(item);
      	m++
      }

    })
		return(
			<div>
			<Button onClick={this.show}>
			Message	
			</Button>
			<Modal show={this.state.show} onHide={this.handleHide} container={this}>
				<Modal.Header>
					<Modal.Title>
					your msg
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				{readMsg.map(function(result){
					return(
						<div>
					<h6>old {result.text}</h6>
					<h6>from: {result.sender}</h6>
						</div>
						)
				})}
				{newMsg.map(function(result){
					return(
						<div>
					<h1>{result.text}</h1>
					<h3>from: {result.sender}</h3>
						</div>
						)
					}
				)}
				</Modal.Body>
				<Modal.Footer>
				<Button onClick={this.handleHide}>Close</Button>
				</Modal.Footer>
			</Modal>
			</div>
			)
	}

}

export default  Pmessage;