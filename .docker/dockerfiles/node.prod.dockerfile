FROM node:latest

# Reduce NPM log level to Warnings
ENV NPM_CONFIG_LOGLEVEL warn

# In production, we copy the code of the server to the container
COPY ./server/ /var/app/

WORKDIR /var/app/

# Install dependencies and third party libraries
RUN npm install

# Start the server with node
CMD [ "npm", "start" ]

