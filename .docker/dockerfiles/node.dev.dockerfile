FROM node:latest

# Reduce NPM log level to Warnings
ENV NPM_CONFIG_LOGLEVEL warn

# Install nodemon globally to use it to reload the server when the code changes
RUN npm install --global nodemon

# Run the server's entrypoint with nodemon
CMD ["nodemon", "-L", "/var/app/app.js"]
