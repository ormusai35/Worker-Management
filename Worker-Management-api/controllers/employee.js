
const handleEmployee = (req,res,db) => {

	db.insert(
			{
				name: req.body.name,
				picture: req.body.image,
				manager_id: req.body.manager_id,
				email: req.body.email,
				role: req.body.role
			})
	.into('employers')
	.returning('manager_id')
	.then(man_id => {
		db.select('*').from('employers')
		.where('manager_id', '=', req.body.manager_id)
		.then(employers_list => {
			res.json(employers_list)
		}).catch(err => res.status(400).json('failed1'))
	})
	.catch(err => res.status(400).json('failed2'))
}

module.exports = {
	handleEmployee
}