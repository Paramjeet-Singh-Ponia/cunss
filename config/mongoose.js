// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/codial_development2');

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


// db.once('open', function(){
//     console.log('Connected to Database :: MongoDB');
// });


// module.exports = db;


// require the library
const mongoose = require('mongoose');

const DB = "mongodb+srv://param:1234@cluster0.taene.mongodb.net/nssdata?retryWrites=true&w=majority ";

//  connect to the database
mongoose.connect(DB).then(() => {
    console.log('connection is successful hurrreyh');
}).catch((err) => console.log('no connection'));


module.exports =DB;