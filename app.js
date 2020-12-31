const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config')


app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//routes
app.get('/', (req, res) => {
    res.send('wea are coming hhome home')
})


//   conect to Db 
mongoose.connect( process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected to db');
})



//how to l;isr\ten to server
app.listen(3000);