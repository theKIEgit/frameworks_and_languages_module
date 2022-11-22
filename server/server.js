const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000

//Links to items file
const items = require('./items')

//Used to validate inputs on post
const { body, validationResult } = require('express-validator')

app.use(express.json())

app.use(cors({
  methods: ['GET','POST','DELETE','OPTIONS']
}))

///Tests server with index
app.get('/', (req, res) => {
  res.send("Hello")
  //res.sendFile('index.html', {root: '/workspace/frameworks_and_languages_module/client/'})
})

app.get('/items', (req,res) => {
  console.log("Start of get")
  //Puts dictionary into a list to be displayed
  tempStorage = []

  //Loops through items list and adds each item into the temp list
  for (let num of Object.values(items)) {
    tempStorage.push(num)
  }
  //Checks if there is a query string for user_id
  if(req.query.user_id){
    const search = req.query.user_id
    //Used resource 4 to assist me
    tempStorage = tempStorage.filter(i => i.user_id === search)
  }
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
      console.log("Start of post")
    if(validationResult(req).isEmpty()){
      console.log("Start of empty")
      //Line taken from Resource 3 to get the max index on the array
      var itemsTopIndex = Math.max.apply(null, Object.keys(items))
      var nextID = itemsTopIndex + 1
      
      if (nextID == "-Infinity"){
        nextID = 0
      }
      var date = new Date().toJSON().slice(0,10)

      console.log(itemsTopIndex)
      console.log(nextID)
      
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
      console.log("post")
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
4: https://stackoverflow.com/questions/47072272/how-to-find-object-in-object-array-in-node-js
*/