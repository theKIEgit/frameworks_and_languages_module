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
    res.status(204).json({msg: "Ok"})
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
      req.body.id = Object.keys(items).length + 1
      req.body.date_from = new Date().toISOString()
      req.body.date_to = new Date().toISOString()
      items[Object.keys(items)[Object.keys(items).length +1 ]]=req.body
      //auto date, id need to be added
      res.status(201).json(req.body)
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