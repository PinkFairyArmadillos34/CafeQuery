const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://codesmith:cs@cluster0.di70nhs.mongodb.net/?retryWrites=true&w=majority";
const Schema = mongoose.Schema;

// Connect to MongoDB 
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  dbName: 'db'
})
.then(()=>console.log('Connected to Mongo DB'))
.catch(err=>console.log(`Error connecting to MongoDB: ${err}`));


// set up a Schema for 'users' collection
const usersSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
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
const workspacesSchema = new Schema({
  zipcode: {
    type: Number,
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
const Users = mongoose.model('users', usersSchema);
const Workspaces = mongoose.model('workspaces', workspacesSchema);

// exports all models in an object to be used in the controller
module.exports = {
  Users,
  Workspaces
}