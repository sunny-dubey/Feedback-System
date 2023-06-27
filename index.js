const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
  res.send({Trying : "to render the edit in deployment"})
})

app.listen(PORT);