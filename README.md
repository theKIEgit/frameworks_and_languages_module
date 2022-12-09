# Frameworks and Languages Module
Stub framework for "Frameworks and Languages" module

https://gitpod.io/#https://github.com/calaldees/frameworks_and_languages_module

* [ReDoc openapi.yml](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/calaldees/frameworks_and_languages_module/main/openapi.yml)

# Commands

# Running

## Running Client
To run the client run these commands in order.
First:
```console 
cd client 
```
Second:
```console
make build 
```
Third:
```console
make Run 
```

## Running Server
To run the server run these commands in order.
First:
```console 
cd server 
```
Second:
```console
make build 
```
Third:
```console
make Run 
```

## View App
When the server and client are running use this url in your browser with xxxxx as your gitpod username. 

https://8001-xxxx.ws-eu67.gitpod.io?api=https://8000-xxxxx.ws-eu67.gitpod.io

To view the server and client connected use a query string ````?api=```` after the client link.

# Testing

## Server Testing
To run all the server tests open a new terminal and run the following command after the server is running.

```console
pytest
```

## Client Testing
To run the cypress client tests with the example server make sure the client and server are not running and run the following command.

```console
make test_your_client_with_example_server
```
Note that this will need to install cypress which can take a while after a report will be made in the test_client file.
