import React from 'react';
import ReactDOM from 'react-dom';

var styles = {color:'red'}

class MyComponent1 extends React.Component{
	render(){
		return(
			<h1 style = {styles}>Hello World !!!!</h1>
		);
	}
}
//ReactDOM.render(
	//<MyComponent/>, document.getElementById('content')
	//);
export default MyComponent1;