import React from 'react';
import {Button ,Modal} from 'react-bootstrap';
import axios from 'axios';
class Pmessage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			messages:[],
			show:false
		}
		this.show=this.show.bind(this);
		this.handleHide=this.handleHide.bind(this);
	}

	componentDidMount(){
		var that=this;
		
		axios.get('/messages')
		.then(function(response){
			console.log('axios data ==========',response.data)
			that.setState({
				messages:response.data
			})
			
			console.log('state.message',that.state.messages)
		})
	}

	show(){
		console.log('message',this.props)
		this.setState({
			show:true
		})
	}

	handleHide(){
		this.setState({
			show:false
		})
	}
	render(){
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
				Body
				</Modal.Body>
				<Modal.Footer>
				footer
				</Modal.Footer>
			</Modal>
			</div>
			)
	}

}

export default  Pmessage;