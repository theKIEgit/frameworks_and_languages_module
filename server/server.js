const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000
const { body, validationResult } = require('express-validator');

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8001',
  methods: ['GET','POST','DELETE', 'OPTIONS']
}));

///https://expressjs.com/en/resources/middleware/cors.html


//Lists
Items = []

app.get('/items/', (req,res) => {
  res.status(200).json(Items)
  res.json(Items)
  console.log('get', Items)
})

app.get('/item/:id', (req,res) => {
  filteredItems = Items.filter(it => it.id === parseFloat(req.params.id))
  if (filteredItems.length === 0){
    res.status(404).send("Sorry can't find that!")
  }
  else{
    res.status(200).send("Found").json(filteredItems)
  }
})

//npm install
//node server.js
//npm install express-validator
///Tests server with index
app.get('/', (req, res) => {
  //res.sendFile('index.html', {root: '/workspace/frameworks_and_languages_module/client/'})
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
      Items.push(req.body)
      res.status(201).json(req.body)
    }
    else {   
      res.status(405).send("Fields are not valid")
    }
})


app.get


///Deletes from list
app.delete('/item/:id', (req,res) => { 
    const id = parseFloat(req.params.id)
    deletedItem = Items.filter(it => it.id === parseFloat(req.params.id))
    if (deletedItem.length === 0){
      res.status(404).send("Sorry can't find that!")
    }
    else{
      Items = [...Items.filter((item)=>item.id != id)]
      console.log('deleted', Items)
      return res.status(204).json({message: 'Deleted'})
    }
    //res.status(404).send("Sorry can't find that!")
})


///Shows port
app.listen(port, () => {
  console.log('Example app listening on port ${port}')
  process.on('SIGINT', function() {process.exit()})
})

app.all('*', (req, res) => {
  res.status(404).send('404! Page not found');
})