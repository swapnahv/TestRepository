import React from 'react';

class EmpDetails extends React.Component {
	constructor(){
		super();
		const emp1 ={
			"empName" :"Swapna",
			"empId": "688616",
			"age": 25,
			"Salary": 41000
		}
		const emp2 = {
			"empName" :"Shwetha",
			"empId": "688592",
			"age": 26,
			"Salary":41001
		}
		this.empArr = [ emp1, emp2];
		this.state = {
			selectedEmp: null
		}
	}
	
	createCard(emp){
		var joinee = null;
		var achive = null;
		if(emp.age<=25){
			joinee = <span style={{"color":"green"}}>-Fresher</span>
		}
		if(this.state.selectedEmp === emp.empId){
			achive = <h3>Ahevement of {emp.empName}</h3>
		}
		return(
			<div>
			<h1>{emp.empName}</h1>
			<p>
				<span>employee Id: {emp.empId}</span><br/>
				<span>Age: {emp.age} {joinee}</span><br/>
				<span>Salary: {emp.Salary}</span>
			</p>
			{achive}
			<br/>
			<button type="button" className='btn btn-primary'>Edit details</button>
			<button type="button" className='btn btn-primary' onClick={()=>{
                 this.setState({selectedEmp:emp.empId}) 
              }} >view</button>
			</div>
		);
	}
	render(){
		return(
			<div>
				<h2>Emploees list</h2>
				{this.empArr.map(emp =>{return this.createCard(emp)})}
			</div>
		);
	}
}

export default EmpDetails;