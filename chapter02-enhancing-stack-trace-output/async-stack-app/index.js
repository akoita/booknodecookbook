// require('cute-stack')()
const express = require('express')
const routes = require('./routes')
const app = express()

 if (process.env.NODE_ENV !== 'production') {
     require('longjohn')
 }
app.use(routes)

app.listen(3000)
