require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/mongo')
const router = require('./routes')


const app = express()


// Middleware
app.use(cors())// comucation between different domains
app.use(express.json())
app.use(express.static('storage'))

// Routes
app.use('/api/v1', router)

const PORT = process.env.PORT || 3000




const start = async () => {
    try {
        console.log()
        const URI = process.env.DB_URI;
        await dbConnect(URI)
        app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start();