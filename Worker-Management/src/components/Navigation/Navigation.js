import React from 'react';

const Navigation = ({ onRouteChange,isSignIn }) => {
	return (
		<div>
			<nav style={{display: 'flex',justifyContent: 'flex-end'}}>
				{
					isSignIn ?
					  <p className='f3 link dim white underline pa3 pointer' onClick={() => onRouteChange('signIn')}>sign out</p>
					: <div style={{display: 'flex',justifyContent: 'flex-end'}}>
						<p className='f3 link dim white underline pa3 pointer' onClick={() => onRouteChange('signIn')}>Sign in</p>
						<p className='f3 link dim white underline pa3 pointer' onClick={() => onRouteChange('Register')}>Register</p>					
					  </div> 
        		}
        	</nav>
		</div>
	);
}

export default Navigation;