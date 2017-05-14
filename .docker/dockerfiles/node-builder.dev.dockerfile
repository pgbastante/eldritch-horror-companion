FROM node:latest

# Reduce NPM log level to Warnings
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /var/app/
