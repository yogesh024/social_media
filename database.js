//The require(‘mongoose’) call above returns a Singleton object. 
//It means that the first time you call require(‘mongoose’), it 
//is creating an instance of the Mongoose class and returning it. 
//On subsequent calls, it will return the same instance that was 
//created and returned to you the first time because of how module 
//import/export works in ES6.
const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

class Database {

    constructor() {
        this.connect();
    }

  connect() {
    const DB = 'mongodb+srv://aaa:aaa@cluster0.dar6fgk.mongodb.net/';

    mongoose.set('strictQuery', false);

    mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((err) => {
        console.log("Database connection error: " + err);
    });
}

}

module.exports = new Database();
