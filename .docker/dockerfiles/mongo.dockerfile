FROM mongo:latest

# Add a custom mongodb configuration
COPY ./.docker/config/mongo.conf /data/configd/mongo.conf

# MongoDB default port
EXPOSE 27017

# Run mongod with the custom configuration
CMD ["mongod", "-f", "/data/configd/mongo.conf"]
