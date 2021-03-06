// CONFIG database.js
//  mongoose db configuration  //
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL, {

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

//  created by mongoose.connect  //
const db = mongoose.connection;
db.on('connected', () => {
    console.log(`Mongoose connected to:${db.host}:${db.port}`);
})