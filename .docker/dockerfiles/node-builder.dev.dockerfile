FROM node:latest

# Reduce NPM log level to Warnings
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /var/app/

COPY ./.docker/dockerfiles/node-builder.dev.sh /var/scripts/node-builder.sh
