# MEAN Stack bootstrap

My objective with this is create a full MEAN stack with all the configuration needed to start a project.

For the client, I'll be using Angular and Webpack.

For now, the server is only serving the static files for the client

The current stack is 

* Client
  * Angular 4.0.3
  * Webpack 2.4.1
  * Karma 1.6.0
* Server
  * Express 4.15.0

# Docker

The stack is built with docker compose. It uses the following services:

* Node: The express server
* Nginx: The server for the client static content and reverse proxy for the express server
* MongoDB: No-Sql database
* Node-Builder: This service builds the client code with webpack. When the service runs, it builds the code and exits when done.


Go to the project root directory and build the docker image with

``` 
docker-compose build
```
Now, to run the containers just do

```
docker-compose up
```

To get the shell of one of the containers 

```
docker exec -i -t \<container-name\> /bin/bash
```

You can see the running containers with

```
docker-compose ps
```

I'm using this as a way of learning all the components of the MEAN stack so I'll try to document everything.

Future additions:
* MongoDB database persistence
* Improve webpack configuration
* End 2 End testing
* Express testing and bootstrapping

Resources:
* https://github.com/AngularClass/angular-starter
* https://github.com/angular/quickstart
* https://lockmedown.com/docker-devs-multiple-containers-docker-compose/