const express = require('express');
const mongoose = require('mongoose');


const app = express();


mongoose.connect("mongodb://localhost:27017/elice");

mongoose.connection.on("connected", ()=>{
    console.log('DB connect success');
});

mongoose.connection.on("error", (err)=>{
    console.log(err);
});

app.use(express.json());

app.listen(3000, ()=>{
    console.log('server open')
});