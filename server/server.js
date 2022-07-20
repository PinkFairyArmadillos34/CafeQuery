const express = require('express');
const mongoose = require('mongoose');
const path = require('path');;
const fetch = require("node-fetch");
const webpackProcess = require('../webpack.config');


const app = express();

const userRouter = require('./routes/userRouter');
const workspaceRouter = require('./routes/workspaceRouter');

const PORT = 3000;
const mongoURI = "mongodb+srv://walle:test123@cluster0.qiqrcbz.mongodb.net/?retryWrites=true&w=majority";

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

// set userRouter with /user endpoint
app.use('/user', userRouter);
app.use('/workspace', workspaceRouter);

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


if (process.env.NODE_ENV === 'production'){
  console.log('call to dist in production')
  // statically serve everything in the dist folder on the route '/dist'
  app.use('/dist', express.static(path.join(__dirname, '../dist')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
})

