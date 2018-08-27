import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			pssword: "",
			name: ""
		}
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value});
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value});
	}		

	onSubmitRegister = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
		.then(response => response.json())
		.then(data => {
			if (data.user) {
				this.props.loadUser(data);
				this.props.onRouteChange('home');
			} else alert('incorrect form submission');
		})
	}


	render() { 
		return (
			<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="New_Employee" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0">New Employee</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">name</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				         type="text" 
				         name="name"  
				         id="name" 
				         onChange={this.onNameChange}
				         />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				         type="email" 
				         name="email-address"  
				         id="email-address" 
				         onChange={this.onEmailChange}
				         />
				      </div>
  				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">image</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				         type="text" 
				         name="image"  
				         id="image" 
				         onChange={this.onNameChange}
				         />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">role</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				         type="text" 
				         name="role"  
				         id="role" 
				         onChange={this.onNameChange}
				         />
				      </div>
				    </fieldset>
				    <div className="">
				      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				       onClick={this.onSubmitRegister} 
				       type="submit" 
				       value="insert" />
				    </div>
				  </div>
				</main>
			</article>
		);
	}
}

export default Register;