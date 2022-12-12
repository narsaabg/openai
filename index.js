const express = require('express');
const env = require('dotenv').config();
const port = process.env.PORT || 6000;

const app = express();

// routes cann be used as /openai/generateimage 
app.use('/openai',require('./routes/openai_routes'));

app.listen(port,res=>console.log(`server started on ${port}`));


