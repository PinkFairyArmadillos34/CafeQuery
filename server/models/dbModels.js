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

