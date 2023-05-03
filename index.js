const express = require('express');
const app = express();
const cors=require('cors');
const port = process.env.PORT || 5000;
const serviceData=require('./data.json')
app.use(cors());

app.get('/', (req, res) => {
    res.send('Bangladeshi Foods recipe is Running')
  })

  app.get('/recipe', (req, res) => {
    res.send(serviceData);
  })

  app.listen(port, () => {
    console.log(`Bangladeshi Foods recipe API is Running on port ${port}`)
  })