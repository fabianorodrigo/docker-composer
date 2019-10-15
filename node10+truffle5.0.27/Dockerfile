# Node image
FROM node:10.16
# Maintainer
MAINTAINER Fabiano Nascimento <fabrodrigo@hotmail.com>
#COPY MetaCoin /home/node/MetaCoin

RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y git

RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y python

RUN apt-get install sudo

RUN npm install --unsafe-perm -g truffle@5.0.27
RUN npm install --unsafe-perm -g ganache-cli

# Set to a non-root built-in user `node`
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/app

WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --chown=node solidity-test/package*.json ./

RUN npm install

# Bundle app source code
COPY --chown=node solidity-test/ .
