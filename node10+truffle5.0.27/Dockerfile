# Node image
FROM node:10.16
# Maintainer
MAINTAINER Fabiano Nascimento <fabrodrigo@hotmail.com>
#COPY MetaCoin /home/node/MetaCoin

RUN apk add --update \
  python

RUN npm install -g truffle@5.0.27
RUN npm install -g ganache-cli

# Set to a non-root built-in user `node`
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/app

WORKDIR /home/node/app