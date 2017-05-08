FROM node:latest

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /var/app/

# Install app dependencies
COPY ./server/ /var/app/

RUN npm install

CMD [ "npm", "start" ]
