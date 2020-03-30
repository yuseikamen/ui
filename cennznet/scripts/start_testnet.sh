#!/bin/bash

set -ex

if [ -z "$(docker network ls | grep "cennznet_apps_testnet" | awk '/ / { print $2 }')" ]; then
  docker network create --driver bridge cennznet_apps_testnet
fi

if [ -z "$(docker ps -a | grep "node_alice")" ]; then
  docker-compose up -d --build
else
  docker-compose build cennznet_apps
  docker-compose up -d
fi

docker-compose logs -f
