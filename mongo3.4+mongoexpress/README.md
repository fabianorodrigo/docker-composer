# My Docker Composers - MongoDB v3.4 + Mongo Express

## MongoDB

Volumes: - mongodata:/data/db - mongoconfig:/data/configdb

Port: 27017

Database: test
Username: admin
Passowrd: admin

## MongoD Express ##

Port: 8081

### RUN INSTRUCTIONS ###

**Start:** ```
sudo docker-composer up mongoexpress # Unless they are already running, this command also starts linked service MongoDB.
```
