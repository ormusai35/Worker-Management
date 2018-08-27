import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div>
			<input
				className="serach_box center"
				type="search"
				placeholder="search employee"
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;