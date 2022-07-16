const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// set up a Schema for 'users' collection
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  cookie: String,
  favorites: Array
});

// Schema for 'workspaces' collection
const workspaceSchema = new Schema({
  workspaceName: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  wifi: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  quiet: String,
  outlets: String,
  timeLimit: Number,
  laptopRestrictions: Boolean,
  crowded: String,
  outdoorSeating: Boolean,
  petFriendly: Boolean,
  url: String,
  foodRating: Number,
  coffeeRating: Number,
  seating: String,
  other: String,
});

// creates models for collections to export
const User = mongoose.model('user', userSchema);
const Workspace = mongoose.model('workspace', workspaceSchema);

// exports all models in an object to be used in the controller
module.exports = {
  User,
  Workspace
}