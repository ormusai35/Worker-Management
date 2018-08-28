import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			image: "",
			role: ""			
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value});
	}		

	onEmailChange = (event) => {
		this.setState({email: event.target.value});
	}

	onImageChange = (event) => {
		this.setState({image: event.target.value});
	}

	onRoleChange = (event) => {
		this.setState({role: event.target.value});
	}

	onSubmitInsert = () => {
		fetch('http://localhost:3000/employee', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				image: this.state.image,
				role: this.state.role,
				manager_id: this.props.getManagerId()
			})
		})
		.then(response => response.json())
		.then(data => {
			if (data) {
				this.props.onRouteChange('new employee');
			}
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
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
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
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Image</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				         type="text" 
				         name="image"  
				         id="image" 
				         onChange={this.onImageChange}
				         />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Role</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				         type="text" 
				         name="role"  
				         id="role" 
				         onChange={this.onRoleChange}
				         />
				      </div>
				    </fieldset>
				    <div className="">
				      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				       onClick={this.onSubmitInsert} 
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