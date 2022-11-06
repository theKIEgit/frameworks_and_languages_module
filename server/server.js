const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000

//Links to items file
const items = require('./items')

//Used to validate inputs on post
const { body, validationResult } = require('express-validator');

app.use(express.json());

//npm install
//node server.js

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
  //Puts dictionary into a list to be displayed
  tempStorage = []

  //Loops through items list and adds each item into the temp list
  for (let num of Object.values(items)) {
    tempStorage.push(num);
  }
  //Outputs the temporary list
  res.status(200).json(tempStorage)
})

//Gets specific item using an id
app.get('/item/:id', (req,res) => {
  var itemID = parseInt(req.params.id)
  if(items.hasOwnProperty(itemID)){
    res.json(items[itemID])
  }
  else{
    res.status(404).send("Item not found")
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
      //Line taken from Resource 3 to get the max index on the array
      var itemsTopIndex = Math.max.apply(null, Object.keys(items))
      var nextID = itemsTopIndex + 1
      //add reference link for date//
      var date = new Date().toJSON().slice(0,10)


      //New item object, dates are generated
      items[nextID] = {
        id: nextID,
        user_id: req.body.user_id,
        keywords: req.body.keywords,
        description: req.body.description,
        image: req.body.image,
        lat: req.body.lat,
        lon: req.body.lon,
        date_from: date ,
        date_to: date
      }
      res.status(201).json(items[nextID])
    }
    else {   
      res.status(405).send("Invalid input - some input fields may be missing")
    }
})

app.get

///Deletes from list
app.delete('/item/:id', (req,res) => { 
var itemID = parseInt(req.params.id)
if(items.hasOwnProperty(itemID)){
  delete items[itemID]
  res.status(204).send("Ok")
}
else{
  res.status(404).send("Item not found")
}  
})

app.options('*', cors())

///Shows port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  process.on('SIGINT', function() {process.exit()})
})

/*
Resources used in project
1: https://stackoverflow.com/questions/34053715/how-to-output-date-in-javascript-in-iso-8601-without-milliseconds-and-with-z
2: https://expressjs.com/en/resources/middleware/cors.html
3: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
*/