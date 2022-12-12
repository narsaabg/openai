const path = require('path');
const express = require('express');
const env = require('dotenv').config();
const port = process.env.PORT || 6000;
const apiKey = process.env.OPENAI_API_KEY;

const app = express();

// request data parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// for static pages
app.use(express.static(path.join(__dirname,'public')));

// routes cann be used as /openai/generateimage 
app.use('/openai',require('./routes/openai_routes'));

app.listen(port,res=>console.log(`server started on ${apiKey}`));


