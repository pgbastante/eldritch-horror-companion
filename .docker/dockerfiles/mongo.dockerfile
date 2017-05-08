FROM mongo:latest

COPY ./.docker/config/mongo.conf /data/configd/mongo.conf

EXPOSE 27017

CMD ["mongod", "-f", "/data/configd/mongo.conf"]
