import React from 'react';
import { Button, FormControl, ButtonToolbar,Panel,ListGroup,ListGroupItem } from 'react-bootstrap';
class HomeDisplay extends React.Component {
  constructor(props) {
  	console.log(props.item.to)
    super(props);
  }


 
render() {
	let phonNum=0;
	if(this.props.item.userInfo.length>0){
		 phonNum=this.props.item.userInfo[0].phoneNumber;
	}
	console.log(this.props.item)
	
  return (
  	<div>
<div>
  	<Panel bsStyle='primary'>
    	<Panel.Heading>
      		<Panel.Title id='pa' toggle>{this.props.item.jobTitle} </Panel.Title>
    	</Panel.Heading>
    	<Panel.Body collapsible>
    	<div className='row'>
    		<div className='col-md-3' >
    			<ListGroup>
 				 <ListGroupItem>{this.props.item.user}</ListGroupItem><br />
		    	 <ListGroupItem>rate goes here</ListGroupItem>
 				 <ListGroupItem><img src='http://www.elyomnew.com/sites/default/files/default_images/profile-default-male.png' /></ListGroupItem>
		   		</ListGroup>
    		</div>
    		<div className='col-md-9'>
    			<ListGroup>
 				 <ListGroupItem>{this.props.item.jobDescription}</ListGroupItem><br />
		    	 <ListGroupItem>{phonNum}</ListGroupItem>
 				 <ListGroupItem>I am avaliabe from {this.props.item.from} to {this.props.item.to}</ListGroupItem>
		  	 	</ListGroup>
    		</div>
    	</div>
    	
    	</Panel.Body>
    	<Panel.Footer>
  		  {this.props.item.created_at.slice(0, 10)}
    	</Panel.Footer>
  </Panel>
</div>

    </div>
    )
  }
}
export default HomeDisplay;
