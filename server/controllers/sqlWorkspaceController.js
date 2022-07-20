const { query } = require('express');
const sqlDB = require('../models/sqlModels.js');

const sqlWorkspaceController = {};

//middleware to get specific workspaces by zip code
sqlWorkspaceController.getWorkspace = async function(req, res, next){
    console.log(' in get workspaces midware!!!!');
    const { zipcode } = req.params;
    const queryString = `SELECT * FROM workspaces WHERE zipcode = ${zipcode}`
    try{
      const workspaces = await sqlDB.query(queryString);
      res.locals.workspaces = workspaces.rows;
      return next();
    }catch(err){
      console.log(err);
      next(err);
    }
}

//Middleware to create workspace
sqlWorkspaceController.createWorkspace = async function (req, res, next) {
  const {
    workspaceName,
    zipcode,
    address,
    rating,
    wifi,
    type,
    quiet,
    outlets,
    laptopRestrictions,
    crowded,
    outdoorSeating,
    petFriendly,
    url,
    foodRating,
    coffeeRating,
    seating,
    other,
  } = req.body;
  const queryString = `
    INSERT INTO workspaces(WorkspaceName, Zipcode, Address, Rating, Wifi, Type, Quiet, Outlets, LaptopRestrictions, Crowded, OutdoorSeating, PetFriendly, URL, FoodRating, CoffeeRating, Seating, Other)
    VALUES('${workspaceName}', '${zipcode}', '${address}', '${rating}', '${wifi}', '${type}', '${quiet}', '${outlets}', '${laptopRestrictions}', '${crowded}', '${outdoorSeating}', '${petFriendly}', '${url}', '${foodRating}', '${coffeeRating}', '${seating}', '${other}') RETURNING *`;
  try {
    const result = await sqlDB.query(queryString);
    res.locals.newWorkspace = result.rows;
    return next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = sqlWorkspaceController;
