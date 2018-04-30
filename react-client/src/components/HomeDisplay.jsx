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
  console.log('this.props.item.userInfo.gender',this.props.item.userInfo[0].gender)
	if(this.props.item.userInfo[0].gender==='male'){
    var image1='http://www.elyomnew.com/sites/default/files/default_images/profile-default-male.png'
  }else{
    var image1='data:image/jpeg;base64,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';
  }
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
 				 <ListGroupItem>
         <img src={image1} />                        
         </ListGroupItem>
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
