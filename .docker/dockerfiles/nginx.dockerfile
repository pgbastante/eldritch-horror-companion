FROM nginx:latest

ENV NPM_CONFIG_LOGLEVEL warn

# Copy custom nginx config
COPY ./.docker/config/nginx.conf /etc/nginx/nginx.conf

WORKDIR /var/app/

EXPOSE 80

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
