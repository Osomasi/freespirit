require('dotenv').config();

const mongoose = require('mongoose');
const connecionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@freespirit.ihrxger.mongodb.net/osomasi19`;

mongoose.connect(connecionString, {useNewUrlparser:true})
.then ( () => console.log('connected TO MONGO DB') )
.catch(err => console.log(err))

mongoose.connection.on('error', err =>{
    console.log('Mongoose connection error: ', err)
})

