# Node image
FROM node:11-alpine
# Maintainer
MAINTAINER Fabiano Nascimento <fabrodrigo@hotmail.com>
# Create code directory
RUN mkdir /code
# Set working directory
WORKDIR /code
# Install Truffle
RUN npm install -g truffle@3.2.x
# iniciando o Shell
ENTRYPOINT [ "sh" ]