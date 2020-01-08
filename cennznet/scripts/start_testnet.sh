#!/bin/bash

set -ex

if [ -z "$(docker network ls | grep "cennznet_apps_testnet" | awk '/ / { print $2 }')" ]; then
  docker network create --driver bridge cennznet_apps_testnet
fi

docker-compose up -d --build
docker-compose logs -f
