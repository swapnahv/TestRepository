import React from 'react';

class ButtonClick extends React.Component{
	constructor(){
		super();
		this.state = {
			count:0
		}
		this.counter = this.counter.bind(this);
	}
	counter (){
		//this.state.count +=1;
		this.setState({count : this.state.count+1});
		this.setState(function(prevState) {
			return {count: this.state.count+1}
		});
		this.setState(function(prevState) {
			return {count: this.state.count+1}
		});
	}
	render(){
		return(
	<button type='button' className ='btn btn-primary' onClick={this.counter}>Count {this.state.count}</button>
		
		);
	}
}

export default ButtonClick;