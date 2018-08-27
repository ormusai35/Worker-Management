import React from 'react';
import Card from './Card';

const CardList = ({ employers }) => {
	return (
		<div>
			{
				employers.map((employee,i) => {
					return ( 
						<Card 
							key={i} 
							id={employers[i].id} 
							name={employers[i].name} 
							email={employers[i].email}
							role={employers[i].role}
							picture={employers[i].picture} 
					/>);
					})
			}
		</div>
	);
}

export default CardList;

