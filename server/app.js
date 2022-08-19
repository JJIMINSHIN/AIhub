const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const cors = require('cors');
const fs = require('fs');
const app = express();


mongoose.connect("mongodb://localhost:27017/elice");

mongoose.connection.on("connected", ()=>{
    console.log('DB connect success');
});

mongoose.connection.on("error", (err)=>{
    console.log(err);
});

app.use(cors());

app.use(express.json());
app.use('/', userRouter);


app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });