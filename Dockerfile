FROM nginx
COPY ./examples/*.conf /etc/nginx/conf.d/
RUN mkdir /etc/nginx/ssl
COPY ./ssl/*.pem /etc/nginx/ssl/

EXPOSE 3000