const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
  res.send({This: "is my full stack project - feedback system"})
})

app.listen(PORT);