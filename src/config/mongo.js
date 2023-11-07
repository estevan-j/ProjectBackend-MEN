const mongoose = require('mongoose')

const dbConnect = (URI) => {
    mongoose.connect(URI,{
        // userNewUrlParse: true,
        // useUnifiedTopology: true
    })
}


module.exports = dbConnect;