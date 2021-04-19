const dotenv= require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const cors=require('cors');
const express = require('express');
const app = express();
const db=require('./DB');
const routes = require('./routes/movie-router')

const path=require('path');

const PORT=process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

db.on('error',()=>{console.log('mongodb connection error:')})

app.use('/movies',routes)

app.listen(PORT,()=>{
    console.log(`sever is up on port ${PORT}`);
})


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}