const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000
const items = require('./items')
const { body, validationResult } = require('express-validator');

app.use(express.json());

///https://expressjs.com/en/resources/middleware/cors.html


//npm install
//node server.js
//npm install express-validator

/*
Used to test
curl -v -X POST  http://localhost:8000/item -H "Content-Type: application/json" -d '{"user_id": "user1234", "keywords": [ "hammer", "nails", "tools"],   "description": "A hammer and nails set",  "image": "https://placekitten.com/200/300",   "lat": 51.2798438,"lon": 1.0830275 }'
curl -v -X GET http://localhost:8000/items
curl -v -X GET http://localhost:8000/item/0
curl -v -X DELETE  http://localhost:8000/item/1
curl -v -X OPTIONS http://localhost:8000/
*/

///Tests server with index
app.get('/', (req, res) => {
  //res.status(200).json(Item)
  res.sendFile('index.html', {root: '/workspace/frameworks_and_languages_module/client/'})
})

app.get('/items/', (req,res) => {
  res.status(200).json(items)
})

app.get('/item/:id', (req,res) => {
  var itemID = parseInt(req.params.id)
  if(items.hasOwnProperty(itemID)){
    res.status(200).json({msg: "Ok"})
  }
  else{
    res.status(404).json({msg: "Item not found"})
  }
})

///Adds to list, uses express validation to check for invalid inputs
app.post("/item/",
    body("user_id").notEmpty(),
    body("keywords").notEmpty(),
    body("description").notEmpty(),
    body("lat").notEmpty(),
    body("lon").notEmpty(),
    function (req, res) {
    if(validationResult(req).isEmpty()){
      var maxIndex = Math.max.apply(null,Object.keys(items));
      var nextID = maxIndex + 1;

      items[nextID] = {
        id: nextID,
        user_id: req.body.user_id,
        keywords: req.body.keywords,
        description: req.body.description,
        image: req.body.image,
        lat: req.body.lat,
        lon: req.body.lon,
      }
      res.status(201).json(items[nextID])
    }
    else {   
      res.status(405).send("Invalid input - some input fields may be missing")
    }
})

//functions for auto generating data

app.get

///Deletes from list
app.delete('/item/:id', (req,res) => { 
var itemID = parseInt(req.params.id)
if(items.hasOwnProperty(itemID)){
  delete items[itemID]
  res.status(204).json({msg: "Ok"})
}
else{
  res.status(404).json({msg: "Item not found"})
}  
})

app.options('*', cors())

///Shows port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  process.on('SIGINT', function() {process.exit()})
})

app.all('*', (req, res) => {
  res.status(404).send('404! Page not found');
})