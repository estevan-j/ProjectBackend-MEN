const express = require('express')
const fs = require('fs')
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

//-------------  ADD ALL DIFFERENTS ROUTES IN THE APP.
// Read all files in de current-Dir
fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)
    if (name !== 'index'){
        router.use(`/${name}`, require(`./${name}`)) // '/${name}' = path, './${name}' SpecificRouter 
    }
})


module.exports = router
