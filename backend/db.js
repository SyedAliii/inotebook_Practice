  const mongoose = require('mongoose')
  const mongoURI = "mongodb://127.0.0.1:27017/inotebook"

  const connectToMongo = () => {
    mongoose.connect(mongoURI)
    .then((val) => {
      console.log("Connection Successfull")
      console.log("Value: " + val);
    }).catch((err) => {
      console.log("Error: " + err);
    })
    
    //mongoose.set("strictQuery", false);
    // const connectToMongo = () => {
    //   mongoose.connect(mongoURI, () => {
    //     console.log("Connected to Mongo Successfully")
    //   })
  }

  module.exports = connectToMongo;