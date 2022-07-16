const { request } = require('express');
const { Workspace } = require('../models/dbModels');

const WorkspaceController = {

  // Create a new workspace in the database
  // information will be sent in the request body
  createWorkspace(req, res, next) {
    // deconstruct the req body
    const { workspaceName, zipcode, address, rating, wifi, type, quiet, outlets, timeLimit, laptopRestrictions, 
    crowded, outdoorSeating, petFriendly, url, foodRating, coffeeRating, seating, other } = req.body;

    // adds a workspace to the database
    Workspace.create( { workspaceName, zipcode, address, rating, wifi, type, quiet, outlets, timeLimit, laptopRestrictions, 
      crowded, outdoorSeating, petFriendly, url, foodRating, coffeeRating, seating, other }) 
      .then(data => {
        res.locals.newWorkspace = data;
        console.log('New workspace: ',data);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error occurred in createWorkspace method of WorkspaceController : ${err}`,
          status: 400,
          message: { err : 'An error occurred while creating a new workspace'}
        });
      });
  },

  // Grabs a workspace from the database
  // workspace_id will be the parameter
  getWorkspace(req, res, next) {
    // deconstruct the username that will be sent in the request parameter
    const { workspace_id } = req.params;

    // finds workspace from the database
    Workspace.findOne({_id: workspace_id})
      .then(data => {
        res.locals.workspace = data;
        console.log('Found workspace: ',data);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error occured in getWorkspace method of WorkspaceController : ${err}`,
          status: 400,
          message: { err: 'An error occured while trying to get workspace'}
        });
      });
  },

  // Deletes the workspace from the database
  // workspace_id will be the parameter
  deleteWorkspace(req, res, next) {
    // deconstruct the workspace_id from params
    const { workspace_id } = req.params;

    // find user based on user params and delete
    // will return the deleted username - don't need to do anything with it
    Workspace.findOneAndDelete({_id: workspace_id})
      .then(data => {
        res.locals.deletedWorkspace = data;
        console.log('Deleted workspace: ', data);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error caught in the deleteWorkspace method of WorkspaceController : ${err}`,
          status: 400,
          message: { err : 'An error occured when trying to delete a workspace'}
        })
      });
  }
}

module.exports = WorkspaceController;