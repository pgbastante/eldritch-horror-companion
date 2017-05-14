FROM nginx:latest

# Reduce NPM log level to Warnings
ENV NPM_CONFIG_LOGLEVEL warn

# Copy custom nginx config
COPY ./.docker/config/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# Run nginx without the daemon flag, because the docker container will stop when the process stops,
# and this cannot be controlled as a daemon
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
