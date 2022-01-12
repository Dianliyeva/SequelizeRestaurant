const express = require('express');
const app = express();

const {Restaurant, Menu, Menu_item} = require('./index');
const {sequelize} = require('./db');
const port = 3000;

app.listen(port, async() => {
    await seed()
    console.log(`Server is listening at //localhost:${port}`)
}) 

async function seed(){
  await sequelize.sync({ force:true });
   let Restaurant = await Restaurant.create({name:'Delicious delights'})
}

