import React from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
class Masseges extends React.Component{
	constructor(props){
		super(props);
		this.state={
			text:'',
			reciver:''
		}
	this.handleChange1=this.handleChange1.bind(this)
	this.handleChange2=this.handleChange2.bind(this)
	this.send=this.send.bind(this)
	}

	handleChange1(e){
		this.setState({
			text:e.target.value
		})
	}
	handleChange2(e){
		this.setState({
			reciver:e.target.value
		})
	}
	send(){
		console.log('send',this.state.text)
		console.log('to',this.state.reciver)
		axios({
			method:'post',
			url:'/messages',
			data:{
				username:this.state.reciver,
				text:this.state.text
			},
			 config: { headers: {'Content-Type': 'multipart/form-data' }}
		})
		.then(function(responce){
			console.log(responce);
		})
		.catch(function(response){
			console.log(responce)
		});

	}

	render(){
		return (
			<div>
			<input type='text' name='t' value={this.state.text} onChange={this.handleChange1} />
			<input type='text' name='r' value={this.state.reciver} onChange={this.handleChange2} />
			<Button onClick={this.send}>SEND</Button>
			</div>
			)
	}
}

export default Masseges;