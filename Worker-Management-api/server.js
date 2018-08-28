const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');


const signin = require('./controllers/signIn');
const register = require('./controllers/register');
const employee = require('./controllers/employee');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '123456',
    database : 'facemarking'
  }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => {
	res.json(database.users);
})

app.post('/signin', (req,res) => { signin.handleSignIn(req,res,db,bcrypt) })
app.post('/register', (req,res) => { register.handleRegister(req,res,db,bcrypt) })
app.post('/employee', (req,res) => { employee.handleEmployee(req,res,db) })

app.get('/profile/:id', (req,res) => {
	const {id} = req.params;
	db.select('*').from('users').where({
		id: id
	})
	.then(user => {
		user.length	? 
			  res.json(user[0])
			: res.status(400).json('user not found');		
	}).catch(err => res.status(400).json('error getting user'))
})

app.put('/searcher', (req,res) => {	
	return 
		db.select('*').from('employers').where('name', 'like', req.body.name + '%' )
		.then(employers => {
			res.json(employers)
		})
		.catch(err => res.status(400).json('error getting data'))
})

app.listen(3000, () => {
	console.log('app is running on port 3000');
})




