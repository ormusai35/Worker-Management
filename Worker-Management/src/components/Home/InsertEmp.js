import React from 'react';
import './InsertEmp.css';

const Card = ({ onNewEmpClick }) => {
	return (
		<div>
			<button className="myButton" onClick={onNewEmpClick}>new worker</button>
		</div>
	);
}

export default Card;