const express = require('express')
const cors = require('cors')

const app = express()



// Middleware
app.use(cors())// comucation between different domains



const PORT = process.env.PORT || 3000




app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))

