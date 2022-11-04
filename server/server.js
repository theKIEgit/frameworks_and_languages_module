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
    var hasNoItems = Object.keys(items).length == 0;
    if (hasNoItems) {
      //items.js contains no items => return information to user via json response
      return res.status(200).json({ msg: `Successful Operation. No items found.` });
    }
    //initialising search id
    var searchId = req.params.itemId;
    //gets all item ids into an array
    var itemIds = Object.keys(items);

    if (!itemIds.includes(searchId)) {
      //items does not contain any items with that search id
      res.status(404).json({ msg: 'Item not found' });
    }
  else{
    res.status(200).json(filteredItems)
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
    if (items[Object.keys(req.params.id)] === undefined){
      res.status(404).send("Item not found")
  }
    else{
      delete items[req.params.id]        
      //items[Object.keys(req.params.id)].delete(Object.keys)
      return res.status(204).send("Ok")
  }
})

app.options('*', cors())


///Shows port
app.listen(port, () => {
  console.log('Example app listening on port ${port}')
  process.on('SIGINT', function() {process.exit()})
})

app.all('*', (req, res) => {
  res.status(404).send('404! Page not found');
})