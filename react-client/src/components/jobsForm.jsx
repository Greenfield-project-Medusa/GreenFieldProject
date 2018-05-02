import React from 'react';
import axios from 'axios';
import { Button, FormControl, Row, Col, ButtonToolbar } from 'react-bootstrap';

import $ from 'jquery';


class JobsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {states:{
			user: '',
			jobTitle: '',
			jobDescription: '',
			category: '',
			location:'',
			nameNewCategory:'',
			arr:[],
			from: '',
			to: ''},
			message:''
			
		}
		this.baseState = this.state;
		this.onChange = this.onChange.bind(this);
		// this.onClick = this.onClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCatogryChange = this.handleCatogryChange.bind(this);
		this.addCatogry=this.addCatogry.bind(this)
	}

	onChange(e) {
	  var states = this.state.states;
      var name = e.target.name;
      var value = e.target.value;
      states[name] = value;
      this.setState({states:states});  
	};
	handleCatogryChange(e){
	 this.setState({nameNewCategory:e.target.value})
	 
	}
	addCatogry(){ 
		$.ajax({
				url:'\category',
				method:'POST',
				Content-Type : "application/json",
				data:{nameNewCategory:this.state.nameNewCategory},

			 success:function(){

			},
				error:function(){

				}
		})

	// 	axios({
 //              method: 'post',
 //              url: '/category',
 //              data: {cat:"fjsdfjsh"}
 //            })
 //            .then(function (response) {
 //                console.log(response);
 //              })
 //              .catch(function (error) {
 //                console.log(error);
 //            });
	// 
}


	handleSubmit(event) {
		var that=this;
		event.preventDefault();
		axios.post('/job', this.state.states)
  			.then(function (response) {
  				that.setState({message:"Job Added"}); 
    		
  			})
  			.catch(function (error) {
    		console.log(error);
  			});
	};


	render() {
		return (
			<center>
			<div id="jobform" className="container wrapper well"><br />
			<form onSubmit={this.handleSubmit}>
			<Row>
			<Col md={1}>
			</Col>
			<Col md={2}>
			<span>Job Title</span>
			</Col>
			<Col md={3}>
			<label >
			<FormControl maxLength={20} type="text" name="jobTitle" placeholder = "Job Title" autoFocus required onChange={this.onChange} />
			</label></Col>
			<Col md={2}>
			<span>Category</span>
			</Col>
			<Col md={3}>
			<label >
			<div className="form-group">
        <select name = "category" className="form-control selectpicker btn btn-default" id="catJ" onChange={this.onChange}>
          <option value="Select">Select Category</option>
          <option value="Driver">Driver</option>
          <option value="Home Maintenance">Home Maintenance</option>
          <option value="Computer Maintenance">Computer Maintenance</option>
          <option value="Babysitting">Babysitting</option>
          <option value="Tutoring">Tutoring</option>
        </select>
        </div>
			</label>
			</Col>
			<Col md={3}>
			<span>add category</span>
			</Col>
			</Row>
			
			<Row>
				<Col md={3}>
					<span>Location</span>
				</Col>
				<Col md={3}>
					<label >
						<div className="form-group">
					        <select name = "location" className="form-control selectpicker btn btn-default" id="catJ" onChange={this.onChange}>
					            <option value="Select">Select Location</option>
					            <option value="Amman">Amman</option>
					            <option value="Irbid">Irbid</option>
					            <option value="Zarqa">Zarqa</option>
					            <option value="Jerash">Jerash</option>
					            <option value="Aqaba">Aqaba</option>
					        </select>
			        	</div>
					</label>
				</Col>
			</Row>
			<Col md={3}>
			<label >
			<FormControl maxLength={20} type="text" name="nameNewCatogry" placeholder = "name of new  Catogry" autoFocus required onChange={this.handleCatogryChange} />
			</label></Col>
			
				 <Button id="cat" className="btn btn-primary" type="submit" bsSize="large" onClick={this.addCatogry} >
					     add Catogry
				  </Button>
			</Row> <br />
			<Row>
			<Col md={1}>
			</Col> 
			<Col md={2}>
			<span>Job Description</span>
			</Col>
			<Col md={8}>
			<label >
			<FormControl id="txtArea" componentClass="textarea"  maxLength={150} name="jobDescription" placeholder = "Job Description" autoFocus required onChange={this.onChange} />
			</label></Col>
			
			<Col md={1}>
			</Col> 
			</Row><br />

			<Row>
			<Col md={1}>
			</Col> 
			<Col md={2}>
			<span>From</span>
			</Col>
			<Col md={3}>
			<label >
			<FormControl type = "time" name = "from" placeholder = "From" autoFocus required onChange={this.onChange} />
			</label> </Col>
			<Col md={2}>
			<span>To</span>
			</Col>
			<Col md={3}>
			<label >
			<FormControl type = "time" name = "to" placeholder = "To" autoFocus required onChange={this.onChange} />
			</label></Col>
			<Col md={1}>
			</Col>
			</Row><br /><br />

			    <Button id="jobb" className="btn btn-primary" type="submit" bsSize="large" >
				     Add
			    </Button>
			    <h3 className="SuccessMessage">{this.state.message}</h3>

			</form>
			</div>
			</center>
		)
	}
}


export default JobsForm;