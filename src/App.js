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
		console.log(newToDo.length);
		newToDo[index].isCompleted = !newToDo[index].isCompleted
		this.setState({
			todos : newToDo
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
        		<ToDo key={index} description={todo.description} isCompleted = {todo.isCompleted} toggleComplete = {() => this.toggleComplete(index)}/>
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
