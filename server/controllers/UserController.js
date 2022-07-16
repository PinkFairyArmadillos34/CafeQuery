const { request } = require('express');
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
  },

  // add a favorite workspace to the user favorites list
  // username will be the parameter and the workspace_id will be in the body
  addFavorite(req, res, next) {
    const { username } = req.params;
    // unsure if should use workspace name or wor
    const { workspace_id } = req.body;

    // find based on username param
    // push the workspace_id to the favorites array
    User.findOneAndUpdate({ username: username }, { "$push": { favorites: workspace_id }})
      .then(data => {
        res.locals.updatedUser = data;
        console.log(data);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error caught in addFavorite method of Usercontroller : ${err}`,
          status: 400,
          message: { err: 'An error occured when trying to add a new favorite'}
        })
      });
  }
}

module.exports = UserController;
