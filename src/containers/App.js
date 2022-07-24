import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends React.Component{
constructor(){
		super();
		this.state={
			robots:[],
			searchfield:''
		}
}

onSearchChange=(event)=>{
	this.setState({searchfield:event.target.value});
}

componentDidMount(){
	  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
}

render(){
	        const filteredRobots=this.state.robots.filter(robot =>{
				return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
				})

	        if(this.state.robots.length===0)
	        	return <h1 className='tc pa2'>Loading...</h1>;
	        else
	        {
		        
				return(
				<div className='tc'>
					<h1 className='f1'>Robomates</h1>
					<SearchBox onSearchChange={this.onSearchChange}/>
					<Scroll>
				    	<CardList robots={ filteredRobots }/>
				    </Scroll>
				</div>
				);	
			}	
}
}

export default App;