# Node image
FROM node:11-alpine
# Maintainer
MAINTAINER Fabiano Nascimento <fabrodrigo@hotmail.com>
COPY MetaCoin /home/node/MetaCoin

RUN apk add --update \
    python

RUN npm install -g truffle@5.0.x