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
        console.log('New User: ',data);
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
        console.log('Found user: ',data);
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

  // Adds a favorite workspace to the user favorites list
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
        console.log('Updated user: ', data);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error caught in addFavorite method of UserController : ${err}`,
          status: 400,
          message: { err: 'An error occured when trying to add a new favorite'}
        })
      });
  },

  // Deletes the user from the database
  // username will be the parameter
  deleteUser(req, res, next) {
    // deconstruct the username from params
    const { username } = req.params;

    // find user based on user params and delete
    // will return the deleted username - don't need to do anything with it
    User.findOneAndDelete({username: username})
      .then(data => {
        res.locals.deletedUser = data;
        console.log('Deleted user: ', data);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error caught in the deleteUser method of UserController : ${err}`,
          status: 400,
          message: { err : 'An error occured when trying to delete a user'}
        })
      });
  }
}

module.exports = UserController;
