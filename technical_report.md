Technical Report
================

This technical report has been created to provide justification for features from our chosen language and framework in our prototype as well as explain the benefits of using a framework to develop software over starting from nothing. Future technologies have been outlined that could be used in the development of FreeCycles's software.

Server Framework Features
-------------------------

### (Routing)
The routing feature allows defined URL endings alongside specified http requests to be linked to a specific function, each route can have multiple http requests and therefore have multiple functionalities linked to a matched URL.

```js
const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to /hello
app.get('/hello', (req, res) => {
  res.send('hello world')
```

Routing is beneficial as it enables us to create modular route handlers which is helpful for managing the structure of an application. The example above shows the response for /hello.

https://expressjs.com/en/guide/routing.html

### (Middleware)
Middleware are functions that have access to the req and res in an application, it is executed after the server receives a request and before a response is sent.
Express is constructed on multiple middleware functions stringed together.

```js
app.get('/item/:id', (req,res) => {
  var itemID = parseInt(req.params.id)
  if(items.hasOwnProperty(itemID)){
    res.json(items[itemID])
  }
  else{
    res.status(404).send("Item not found")
  }
})
```
Request and response methods allow us to perform different tasks like error control, routing and cors are some examples.

[What is middleware](https://aws.amazon.com/what-is/middleware/)

[Middleware in express js](https://www.geeksforgeeks.org/middleware-in-express-js/)

[Using middleware](https://expressjs.com/en/guide/using-middleware.html)



### Templating q

Express js allows for tepmplate engines which use an algorithm on runtime to generate HTML dynamically that is then sent to the client. The most popular templates are EJS, Mustache and Pug, below is an example of pug.

```html
doctype html
 head
	title Hello, World!
 body
	h1 Example!
	p This is a Pug example.
```
The generated HTML looks like:
```html
<!DOCTYPE html>
  <head>
    <title>Hello, World!</title>
  </head>
  <body>
    <h1>Example!</h1>
    <p>This is a Pug example.</p>
  </body>
</html>
```
Templates are used to streamline the creation of HTML pages by enabling developers to use consistent blocks across projects making these blocks reusable and easier for a human to read/ edit if needed.

[Using template engines](https://expressjs.com/en/guide/using-template-engines.html)

[How to do templating using expressjs](https://www.geeksforgeeks.org/how-to-do-templating-using-expressjs-in-node-js/)

[A beginners guide to pug](https://www.sitepoint.com/a-beginners-guide-to-pug/)

Server Language Features
-----------------------

### Error Handling

Express has a default handler middleware to make assertions that can be used to catch and handle different errors in different ways while preventing crashing.

```js
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

Handling errors properly means finding bugs can be quicker but also makes the program more robust, allowing the program to stay running when interrupted. Express benefits by having built-in error handling at the end of the middleware stack reducing bulky try/catch blocks.

[Express js error handling](https://expressjs.com/en/guide/error-handling.html)


### .Filter

This creates a shallow copy () of an array and filters the elements that pass a defined test, the original array is not altered by using this function alone.

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```
This removes the need for large for loops to search the elements of an array condensing the process down to one line.


[Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

[Shallow Copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)


Client Framework Features
-------------------------
### Virtual DOM

A virtual DOM will serve as the interface the user interacts with while the "Real DOM" is being updated with new data, A virtual DOM will be constantly synched with the "Real DOM" so that new data is synched and displayed.

```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
<h1>This is a Heading</h1>
<p>This is a paragraph.</p>
</body>
</html>
```

The use of a Virtual DOM means that the data on the page can be updated and iterated upon without the need for complicated re-rendering functions in JavaScript.

[Rendereing Mechanism](https://vuejs.org/guide/extras/rendering-mechanism.html)

[How the virtual DOM works in Vue.js](https://blog.logrocket.com/how-the-virtual-dom-works-in-vue-js/)

### Text Interpolation

Vue utilizes interpolation to insert data-bound variables into a HTML syntax by using the mustache syntax `{{Variable name}}` so it can be displayed, the variable can be updated and changed.

```html
<h5 data-field="id" class="card-title">ID: {{item.id}}</h5>
<p class="card-text">User ID: {{item.user_id}}</p>
<p class="card-text">Keywords: {{item.keywords}}</p>
<p class="card-text">Description: {{item.description}}</p>
<p class="card-text">Lat: {{item.lat}}</p>
<p class="card-text">Lon: {{item.lon}}</p>
<p class="card-text">Date From: {{item.date_from}}</p>
<p class="card-text">Date To: {{item.date_to}}</p>
```
This allows for variables to be synchronized without needing extra functions to re-render the webpage.

[Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html)

[Interpolations](https://medium.com/js-dojo/vue-js-cli3-interpolations-first-directives-javascript-in-the-html-template-and-binding-en-b01dc9bcaabe)

### List rendering

Vue can use the  v-for syntax to render a list from an array, objects and other storage mediums. "item in items" can be used to iterate through an "items" array to grab an "item" as an array element.

```html
<li class="list-group-item" v-for="item in items">

	<h5 data-field="id" class="card-title">ID: {{item.id}}</h5>
	<p class="card-text">User ID: {{item.user_id}}</p>
	<p class="card-text">Keywords: {{item.keywords}}</p>
	<p class="card-text">Description: {{item.description}}</p>
	<p class="card-text">Lat: {{item.lat}}</p>
	<p class="card-text">Lon: {{item.lon}}</p>
	<p class="card-text">Date From: {{item.date_from}}</p>
	<p class="card-text">Date To: {{item.date_to}}</p>
```
Without this, a complicated javascript function will be needed with loops to iterate through a list to fetch the needed with vue this is reduced drastically.

[List](https://vuejs.org/guide/essentials/list.html)

[List Rendering](https://www.w3resource.com/vue/list-rendering.php)


Client Language Features
------------------------

### `this`

The use of `this` refers to an object that is running in the current block of code, if called within a function it binds the function to an object.

```js
public class Main { 
  int x; 
  // Constructor with a parameter
  public Main(int x) { 
    this.x = x;
  } 
  // Call the constructor
  public static void main(String[] args)  { 
    Main myObj = new Main(1000); 
    System.out.println("x = " + myObj.x);
  } 
} 
```
`this` is mainly used in constructors to differentiate between a class attribute name when it is the same as a parameter.

[What Does 'this' Mean in JavaScript?](https://www.freecodecamp.org/news/what-is-this-in-javascript/)

[JavaScript “This” Keyword and How to Implement It](https://www.simplilearn.com/tutorials/javascript-tutorial/javascript-this-keyword)

[Java this Keyword](https://www.w3schools.com/java/ref_keyword_this.asp)

### `then` 
`then` is used to handle asynchronous tasks by scheduling call-back functions. `then` works by making a `new promise` when these are created an executor attempts to perform a task and returns resolved if done or rejected if there was an error.

```js
        getItems() {
            fetch(`${urlAPI}/items`, {
            method: 'GET',
            })
            .then(response => response.json())
            .then(data => this.items = data)
        .catch(err => console.error(err))
        },
```

JavaScript is a synchronous language so programs run line by line making use of asynchronous allows the program to handle tasks like API requests and still be responsive.

[Promise.prototype.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

[Understanding the Async in JavaScript](https://www.geeksforgeeks.org/understanding-the-async-in-javascript/)

[Why we use then() method in JavaScript ?](https://www.geeksforgeeks.org/why-we-use-then-method-in-javascript/)

[Promise](https://javascript.info/promise-basics)

Critique of Server/Client prototype
---------------------

### index.html Fragmented


```js
	function render_items(params) {
		fetch(`${urlAPI}/items?${new URLSearchParams(params).toString()}`)
			.then(response => response.json())
			.then(renderItems)
		.catch(err => console.error(err));
	}
```
```js
	function renderItems(data) {
		const $item_list = document.querySelector(`[data-page="items"] ul`);
		const new_item_element = () => document.querySelector(`[data-page="items"] li`).cloneNode(true);

		for (let item_data of data) {
			const $new_item_element = new_item_element();
			$item_list.appendChild($new_item_element);
			renderDataToTemplate(item_data, $new_item_element, renderItemListFieldLookup);
			attachDeleteAction($new_item_element);
		}
	}
```
The above shows the rendering in the prototype fragmented across multiple functions, this is a bad practice as it makes the program harder to be read and iterated upon overall wasting time, instead all functions related should be grouped as one.

### HTTP Response

```py
RESPONSE_CODES = {
    200: 'OK',
    201: 'Created',
    204: 'No Content',
    301: 'Moved Permanently',
    304: 'Not Modified',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    500: 'Internal Server Error',
    501: 'Not Implemented',
}
```
The list of HTTP responses provided is far from complete only 14 of the main 16 codes are listed, with this method handling responses will cause errors when provided with an unlisted response, it would be better to make this dynamic as this will future proof the system and reduce the programs complexity, find below some examples of missing responses (From HTTP Status Codes):

- 302: Temporary Redirect
- 408: Request Timeout
- 410: Gone
- 500: Internal Server Error
- 503: Service Unavailabl

[HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

[HTTP Status Codes](https://moz.com/learn/seo/http-status-codes)


Future Technology Suggestions
-----------------------------

### Serverless Architecture

This is a way to build and run functions without having to manage it's infrastructure when the function is called the provider will create an instance on the closest possible server meaning that there will be a lower latency and can can be scaled automatically, however there is no control over the infrastructure so if there is an outage you have to wait for the provider to fix it and it's hard to change provider as it uses a certain language that other providers won't support. 

[Serverless Architecture](https://aws.amazon.com/lambda/serverless-architectures-learn-more/)

[Serverless Architecture Overview](https://www.datadoghq.com/knowledge-center/serverless-architecture/)

### Static Site Generation

Static site generation is used to generate entire HTML pages by using cached templates that are compiled at build time on the server, this allows all content to be served on the first load without refreshes being needed to apply data each get request this also means there are less data channels susceptible to malicious attacks. however, this means the user is entirely reliant on the server to compile the sites, if their are server issues compile times can be high.

[What is a Static Site Generator?](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/)

[What is a static site generator? (2)](https://www.cloudflare.com/en-gb/learning/performance/static-site-generator/)

[Static Site Generator](https://www.gatsbyjs.com/docs/glossary/static-site-generator/)

[Teleport](https://teleporthq.io/blog/what-is-a-static-site-generator)

[Why You Shouldn't Use a Static Site Generator](https://www.getrevue.co/profile/masteringjs/issues/why-you-shouldn-t-use-a-static-site-generator-for-your-next-blog-292833)

### NoSQL

NoSQL is a non-relational data storage method, this method does not require a fixed data model like traditional SQL allowing for more flexible storage this is beneficial for large scaled systems that would traditionally require hundreds of keys and relationships. However NoSQL is denormalised meaning that data can be nested/repeated throughout the database this does increase the read speeds but also takes up more memory.

[What Is NoSQL](https://www.mongodb.com/nosql-explained)

[NoSQL Databases](https://www.couchbase.com/resources/why-nosql)

[NOSQL DATABASES ARE THE PROBLEM, NOT THE SOLUTION](https://mindmatters.ai/2022/01/nosql-databases-are-the-problem-not-the-solution/)

[SQL versus NoSQL: Pros and Cons](https://www.datastax.com/blog/sql-vs-nosql-pros-cons)
