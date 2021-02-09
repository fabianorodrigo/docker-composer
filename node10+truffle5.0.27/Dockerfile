# Node image
FROM node:10.16
# Maintainer
MAINTAINER Fabiano Nascimento <fabrodrigo@hotmail.com>

RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y git

RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y python

RUN apt-get install sudo

RUN npm install --unsafe-perm -g truffle@5.0.27
RUN npm install --unsafe-perm -g ganache-cli

# Create app directory (with user `node`)
RUN mkdir -p /home/dapp
RUN chmod u+rw /home/dapp 

# set to a non-root built-in user
USER node

WORKDIR /home/dapp

