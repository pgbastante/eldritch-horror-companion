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

Docker

Go to the project root directory and build the docker image with

docker build . -t \<tagname\>

Now, to run the container just do

docker run -p 3000:3000 -t \<tagname\>

This will expose the 3000 port on localhost so you can go to the url localhost:3000 on your browser to see the example running

I'm using this as a way of learning all the components of the MEAN stack so I'll try to document everything.

Future additions:
* Nginx ??
* MongoDB
* Improve webpack configuration
* End 2 End testing
* Express testing and bootstrapping

Resources:
* https://github.com/AngularClass/angular-starter
* https://github.com/angular/quickstart