const express = require('express');
const mongoose = require('mongoose');
const path = require('path');;
const app = express();

const UserController = require('./controllers/UserController')

const PORT = 3000;
const mongoURI = "mongodb+srv://codesmith:cs@cluster0.di70nhs.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB 
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'db'
})
.then(()=>console.log('Connected to Mongo DB'))
.catch(err=>console.log(`Error connecting to MongoDB: ${err}`));


// need to determine how we are parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set userRouter
const userRouter = express.Router();
app.use('/', userRouter);

// Create a user in the database
userRouter.post('/', UserController.createUser, 
  (req, res) => res.status(201).json(res.locals.newUser));

// Get user from the database
userRouter.get('/:username', UserController.getUser,
  (req, res) => res.status(200).json(res.locals.user));

// Update a user in the database
userRouter.patch('/:username', UserController.addFavorite,
  (req, res) => res.status(200));

// unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured'}
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
})

