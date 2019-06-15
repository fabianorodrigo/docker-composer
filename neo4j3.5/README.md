# My Docker Composers - Neo4j v3.5

## Neo4j

Volumes: 
    - neo4jdata:/data 
    - neo4jlogs:/logs
    - neo4jplugins:/plugins
    - neo4jimport:/import

Port: 7474

Username: neo4j
Passowrd: neo4j

### RUN INSTRUCTIONS ###

**Start:** 
```bash
sudo docker-composer up
```
