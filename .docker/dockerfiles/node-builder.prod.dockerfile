FROM node:latest

# Reduce NPM log level to Warnings
ENV NPM_CONFIG_LOGLEVEL warn

VOLUME /var/app/

# Copy the code to the container
COPY ./ /var/app/

WORKDIR /var/app/

# Build the code for production
CMD ["npm", "start"]
