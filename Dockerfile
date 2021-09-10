FROM php:7.4-apache

#Person in charge of maintenance
LABEL maintainer="Gerard Carthy"

#Set Working Directory of Docker Container
COPY app /srv/app


COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf