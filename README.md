# MEAN Stack bootstrap

The goal of this project is to create a full-stack JavaScript development environment with production deployment capabilities.

As a MEAN stack, it's built with:

* MongoDb
* Express
* Angular
* NodeJs

# Webpack

To build the client we use webpack

THe linting on the client is done with codelyzer (http://codelyzer.com/)

# Docker

The stack is built with docker compose. It creates a service for each of the MEAN stack components and another one to build the project in the client.

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

# TODO
* MongoDB database persistence
* MongoDB Connection example in code
* Improve webpack configuration
* End 2 End testing
* Express testing and bootstrapping
* Review linting configuration for both the client and the server
* Add a sample of mogodb connection with Express
* Location for resources like css
* css linting
* Babel configuration?
* A more detailed skeleton for the client and the server
* A more detailed Readme
* Better use os the ENV constants in webpack configuration

# About this project

I'm using this as a way of learning all the components of the MEAN stack and to make a bootstrap project for my future creations. I'm aware of other projects, like Mean.js, that are more complete than this one. It's ok, I'm just trying to learn how everything connects and add whatever I like to it. I'm using what I need from the resources I investigate for this project (e.g, I find quite usefull the comments of AngularClass project). This things may change in the future when I get more knowledge of all the parts involved in this. 

Feel free to use it, fork it, or do whatever you whant with it. If you like it, mention me. If you don't... well, you don't need to say anything.


# Resources
* https://github.com/AngularClass/angular-starter
* https://github.com/angular/quickstart
* https://lockmedown.com/docker-devs-multiple-containers-docker-compose/