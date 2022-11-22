Technical Report
================

(intro)


Server Framework Features
-------------------------

### (Routing)
(Redo this gibberish)
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
(Redo this gibberish)
Middleware are functions that have access to the req and res in an application, it is executed after the server receives a request and before a response is sent.
Express is constructed on multiple middleware functions stringed together.

```js
const exampleLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(exampleLogger)
```
Above is a simple Express middleware that will print LOGGED when a request is passed through in this case the middleware has been assigned the name exampleLogger

### Add uses/ benefits ^

https://aws.amazon.com/what-is/middleware/
https://www.geeksforgeeks.org/middleware-in-express-js/



### Templating

A template allows static template files to be used in the application - Need to complete
```html
html
  head
    title= title
  body
    h1= message
```

```js
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
```

(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)
https://expressjs.com/en/guide/using-template-engines.html

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


### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Client Framework Features
-------------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 3)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Client Language Features
------------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)

### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


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

### Server cors usage

```js
'Access-Control-Allow-Origin': '*',
```

(A code snippet example demonstrating the feature - 1 mark)
(Explain why this pattern is problematic - 40ish words 1 mark)


Future Technology Suggestions
-----------------------------

### (name of technology/feature 1)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)


### (name of technology/feature 2)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)


### (name of technology/feature 3)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)
