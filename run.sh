#!/bin/bash

echo "learningOrschestra: a machine learning resource orchestrator"
echo "------------------------------------------------"
echo "Buiding own images service..."
echo "------------------------------------------------"

docker-compose build 

echo "------------------------------------------------"
echo "Adding the image service in docker daemon security exception..."
echo "------------------------------------------------"

echo '{
  "insecure-registries" : ["myregistry:5050"]
}
' > /etc/docker/daemon.json

echo "------------------------------------------------"
echo "Restarting docker service..."
echo "------------------------------------------------"

service docker restart

echo "------------------------------------------------"
echo "Deploying learningOrchestra in swarm..."
echo "------------------------------------------------"

docker stack deploy --compose-file=docker-compose.yml service

echo "------------------------------------------------"
echo "Pushing the own service images in local repository..."
echo "------------------------------------------------"

sleep 20
docker push 127.0.0.1:5050/database_api:database_api

echo "------------------------------------------------"
echo "Configuring replica set in database services..."
echo "------------------------------------------------"

sleep 20

docker exec $(docker stack ps service -q -f name="service_database_1") ./database_replica_set.sh

echo "------------------------------------------------"
echo "End."
echo "------------------------------------------------"