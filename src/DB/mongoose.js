const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(`${process.env.MONGODB_CONNECTION}` , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})



