const express = require('express');
require('./db')
const mongoose = require('mongoose')
const cors = require('cors')
require('./models/user')
require('./models/post')
const app = express()
const path = require('path')


app.use(cors())
app.use(express.json())
app.use(require('./api/auth'))
app.use(require('./api/post'))
app.use(require('./api/user'))


app.use(express.static('client/build'))
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})


module.exports = app
