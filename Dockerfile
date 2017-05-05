FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
WORKDIR /usr/src/app/client

RUN npm install
RUN npm run build

WORKDIR /usr/src/app/server
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
