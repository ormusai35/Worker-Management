import React from 'react';
import './Card.css';

const Card = ({email, name, role, picture, id}) => {
	return (
		<div className="card" >
			<img className="image" alt='robots' src={picture} width='200px' height='200px'/>
			<div> 
				<h2 className='f3 ttu tracked shadow-5'>{name}</h2>
				<p className='f4 ttu tracked'>{email}</p>
				<p className='f4 ttu tracked'>{role}</p>
			</div>
		</div>
	);
}

export default Card;