echo "By default you can login as admin with password admin"
docker run -d --name SonarQube -p 9000:9000 -p 9092:9092 sonarqube
