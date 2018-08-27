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
	robots : [],
	employers: [],
	searchfield: '' 
}

class App extends Component {

	constructor() {
		super();
		this.state = initState;
	}

	loadUser = (data) => {
		this.setState({user: {
			id: data.user.id,
			name: data.user.name,
			email: data.user.email,
			password: data.user.password,
			entries: data.user.entries,
			joined: data.user.joined
		}}); 
		this.setState({employers: data.employers});
	}

	onChangeInput = (event) => {
		this.setState({input: event.target.value});
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
		// this.setState({ searchfield: event.target.value });
		// fetch('http://localhost:3000/image', {
		//             method: 'post',
		//             headers: {'Content-Type': 'application/json'},
		//             body: JSON.stringify({
		//               name: this.state.searchfield.toLowerCase()
		//             })
		//         })
		// .then(response => response.json())
		// .then(robots => {
		// 	console.log(robots);
		// 	this.setState({robots: robots})
		// })
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
    		? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
    		: route === 'home'
    		?
    			 <div>	  
					<div className="deepshadow"> Employee Pool</div>
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
    			<InsertEmployee />
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
