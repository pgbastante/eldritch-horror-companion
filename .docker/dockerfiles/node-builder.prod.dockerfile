FROM node:latest

# Reduce NPM log level to Warnings
ENV NPM_CONFIG_LOGLEVEL warn

# Copy the code of the client to the container
COPY ./client/ /var/app/

WORKDIR /var/app/

# Install dependencies and third party libraries
RUN npm install

# Build the client code for production
CMD ["npm", "run", "build"]
