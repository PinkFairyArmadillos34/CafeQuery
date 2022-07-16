const { Users, User } = require('../models/dbModels');

const UserController = {

  // create a new user in the database
  // information will be sent in the request body
  // will send back the created user object
  createUser(req, res, next) {
    // deconstruct the req body (excluding favorites since not part of signup)
    const { username, password, zipcode, birthday, cookie } = req.body;

    // add user to the database
    User.create( { username, password, zipcode, birthday, cookie } ) 
      .then(data => {
        res.locals.newUser = data;
        console.log(data);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error occurred in createUser method of UserController : ${err}`,
          status: 400,
          message: { err : 'An error occurred while creating a new user'}
        });
      });
  },

  // get a user's information from the database
  // username will be the paramater 'username'
  // 
  getUser(req, res, next) {
    // deconstruct the username that will be sent in the request parameter
    const { username } = req.params;

    User.findOne({username: username})
      .then(data => {
        res.locals.user = data;
        console.log(data);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error occured in getUser method of UserController : ${err}`,
          status: 400,
          message: { err: 'An error occured while trying to get user'}
        });
      });
  }
}

module.exports = UserController;
