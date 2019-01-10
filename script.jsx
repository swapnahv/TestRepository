import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent1 from './script.js';
import EmpDetails from './empDetails.js';
import ButtonClick from './clickCheck.js';

var styles={color:'red'};
var yellow = {color : 'yellow'};

class Header extends React.Component{
	render(){
		return(
			<h1>This is {this.props.name}'s Header</h1>
		);
	}
}
class  Footer extends React.Component{
	constructor(props) {
    super(props);
    this.state = {user: 'swapna!'};
  }
	render(){
	setTimeout(()=>{this.setState({user:'Shwetha'})},5000);
			return(
				<div>
					<h1>user is {this.state.user}</h1>
					<h1>This is Footer</h1>
				</div>
			);
	}
}



class MyComponent extends React.Component{
	render(){
		return(
		<div>
		<MyComponent1/>
		<Header name= "Swapna"/>
			<h2 style={yellow}>React Basics</h2>
			<p>sum = {10+20}</p>
			<Footer/>
			<EmpDetails/>
			<ButtonClick/>
			</div>
		);
	}
}

ReactDOM.render(
	<MyComponent/>, document.getElementById('content')
	);