
const handleSignIn = (req,res,db,bcrypt) => {
	const { email, password } = req.body;
	if (!email || !password){
		return res.status(400).json('incorrect form submission');
	}
	db.select(' hash','email').from('login')
	.where('email', '=', req.body.email)
	.then(data => {
		const isComp = bcrypt.compareSync(req.body.password, data[0].hash);		
		if (isComp) {
			return db.select('*').from('users')
			.where('email', '=', req.body.email)
			.then(user => {
				db.select('*').from('employers')
				.where('manager_id', '=', user[0].id)
				.then(employers_list => res.json({
					user: user[0],
					employers: employers_list
				}))
			})
			.catch(err => res.status(400).json('unable to get user'))
		} else {
			res.status(400).json('wrong password')
		}
	})
	.catch(err => res.status(400).json('wrong credentials'))
}

module.exports = {
	handleSignIn
}