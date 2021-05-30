const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/TwisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

mongoose.connection.on('connected', () => {
    console.log('Connecté à Mongodb !');
})

mongoose.connection.on('error', error => {
    console.log('error in connecting to mongodb', error);
})