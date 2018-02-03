 import React, { Component } from 'react';
 
 class ToDo extends Component{
 
 	render(){
 	
 		return (
 			<div>
 				<input type="checkbox" checked={this.props.isCompleted} onChange ={this.props.toggleComplete} />
 				<span>{this.props.description} </span>
 			</div>
 		);
 	}
 }
 
 export default ToDo;