FROM node:latest

# Reduce NPM log level to Warnings
ENV NPM_CONFIG_LOGLEVEL warn

VOLUME /var/app/

# Copy the code of the client to the container
COPY ./client/ /var/app/

WORKDIR /var/app/

# Build the client code for production
CMD ["npm", "start"]
