# Node image
FROM node:11-alpine
# Maintainer
MAINTAINER Fabiano Nascimento <fabrodrigo@hotmail.com>
# Create code directory
RUN mkdir /code
# Set working directory
WORKDIR /code
# Install git
#RUN apk update && apk upgrade && \
#    apk add --no-cache git
# Install Truffle
RUN npm install -g truffle@4.1.x
# iniciando o Shell
# ENTRYPOINT [ "/bin/bash" ]