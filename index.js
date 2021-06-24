const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')

const {ApiController} = require('./ApiController');
const apiController = new ApiController();

app.use(cookieParser());

app.get('/double/:number', apiController.double);
app.get('/count',apiController.count);
app.get('/joke',apiController.joke);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
