import React, { Component } from 'react'; 

class EventBind extends Component { 
   console.log("Welcome");
	constructor(props) { 
		super(props) 
		this.state = { 
			message: 'Welcome'
      
		} 
   
    
	} 

	clickHandler() { 
    

		this.setState(
      { 
			message:'Farewell'
		}) 
  }   
  



	render(){ 
		return ( 
			<div> 
				<h3>{this.state.message}</h3> 

				<button onClick={this.clickHandler.bind(this)}> 
						Click</button> 
          
			</div> 
      
		) 
	} 
} 

export default EventBind;
