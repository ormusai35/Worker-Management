import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from '../components/Navigation/Navigation';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import SearchBox from '../components/Home/SearchBox';
import Scroll from '../components/Home/Scroll';
import CardList from '../components/Home/CardList';
import InsertEmp from '../components/Home/InsertEmp';
import InsertEmployee from '../components/Home/InsertEmployee/InsertEmployee';


const particlesOptions =  {
	particles: {
		number: {
			value: 30,
			density: {
				enable: true,
				value_area: 300
			}
		}
	}
}

const initState = {
	input: '',
	route: 'signIn',
	isSignIn: false,
	user: {
		id: '',
		name: '',
		email: '',
		password: '',
		entries: 0,
		joined: ''
	},
	employers: [],
	searchfield: '' 
}

class App extends Component {

	constructor() {
		super();
		this.state = initState;
	}

	getManagerId = () => {
		return this.state.user.id;

	}

	loadUser = (user_to_load) => {
		this.setState({user: {
			id: user_to_load.id,
			name: user_to_load.name,
			email: user_to_load.email,
			password: user_to_load.password,
			entries: user_to_load.entries,
			joined: user_to_load.joined
		}}); 
	}

	updateEmployers = (employers_list) => {
		this.setState({employers: employers_list});
	}

	onChangeInput = (event) => {
		this.setState({input: event.target.value});
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	onRouteChange = (route) => {
		if (route === 'signIn') 
			this.setState(initState);
		else if (route === 'home')
			this.setState({isSignIn: true});
		this.setState({route: route});
	}

	onNewEmpClick = () => {
		this.setState({route: 'new employee'});
	}

  render() {

  	const filteredEmployers = this.state.employers.filter(employer => {
			return employer.name.toLowerCase().startsWith(this.state.searchfield.toLowerCase())
		})

  	const {route,isSignIn} = this.state;
    return (
      <div className="App">
      	<Particles className='particles' 
              params={particlesOptions}
            />
        <Navigation isSignIn={isSignIn} onRouteChange={this.onRouteChange}/>
        {
    		route === 'signIn' 
    		? <SignIn updateEmployers={ this.updateEmployers } loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
    		: route === 'home'
    		?
    			 <div>	  
					<div className="deepshadow"> Workers Management </div>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList 
						employers={filteredEmployers} 
						/>
					</Scroll>
					<InsertEmp onNewEmpClick={ this.onNewEmpClick }/>
				  </div>
    		: route === 'new employee'
    		? <div>
    			<InsertEmployee updateEmployers={ this.updateEmployers } getManagerId={ this.getManagerId } onRouteChange={this.onRouteChange}/>
    		  </div>  
    		: <div>
    			<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
    		  </div>
        }
        
      </div>
    );
  }
}

export default App;
