import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js'

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			todos: [
				{description : "Take out garbage", isCompleted : false},
				{description : "Buy groceries", isCompleted : true},
				{description : "Do homework", isCompleted : false},
			],
			newDescription: ""
		};
	}
	
	toggleComplete(index){
		var newToDo = this.state.todos;
		newToDo[index].isCompleted = !newToDo[index].isCompleted
		this.setState({
			todos : newToDo
		});
	}
	deleteToDo(index){
		var newToDos = [];
		let counter = 0;
		var newToDos = this.state.todos.filter((todo,indexf) => indexf!==index);
		
		/*
		this.state.todos.map((todo, indexf)=> {
			if(index !== indexf){
				newToDos[counter] = {
					description:todo.description, isCompleted:todo.isCompleted
				};
				counter++;
			}
		});
		*/
		this.setState({
			todos : newToDos
		});
	}
	
	handleSubmit(e){
		e.preventDefault();
		if(!this.state.newDescription){
			return;
		}
		const newToDo = {description:this.state.newDescription, isCompleted:false};
		this.setState({
			todos: [...this.state.todos, newToDo],
			newDescription: ""
		});
	}
	handleChange(e){
		this.setState({
			newDescription : e.target.value 
		});
	}
	
  render() {
    return (
      <div className="App">
        <ul>
        	{this.state.todos.map( (todo,index) => 
        		<ToDo key={index} description={todo.description} isCompleted = {todo.isCompleted} deleteToDo={()=>this.deleteToDo(index)} toggleComplete = {() => this.toggleComplete(index)}/>
        	)}
        </ul>
        <form onSubmit={(e) => this.handleSubmit(e)}>
        	<input type="text" value={this.state.newDescription} onChange={ (e) => this.handleChange(e)} />
        	<input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
