FROM node:latest

ENV NPM_CONFIG_LOGLEVEL warn

# Install app dependencies
COPY ./client/ /var/app/

WORKDIR /var/app/

RUN npm install

CMD ["npm", "run", "build"]
