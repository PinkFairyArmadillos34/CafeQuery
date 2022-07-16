const express = require('express');
const mongoose = require('mongoose');
const path = require('path');;

const app = express();

const PORT = 3000;

// need to determine how we are parsing data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


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