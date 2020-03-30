FROM ubuntu:18.04 as builder

# Install any needed packages
RUN apt-get update && apt-get install -y curl git gnupg coreutils

# install nodejs
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
RUN npm install yarn yalc -g

WORKDIR /api.js
RUN git clone -b 1.0.0-with-yalc --single-branch https://github.com/cennznet/api.js.git .
RUN ls -l
RUN yarn
RUN chmod +x ./scripts/*
RUN ./scripts/yalc_publish.sh

WORKDIR /apps
COPY . /apps
RUN ls -l

RUN yalc add @cennznet/util --link

WORKDIR /apps/packages/react-api
RUN yalc add @cennznet/types --link
RUN yarn
WORKDIR /apps/packages/app-generic-asset
RUN yalc add @cennznet/crml-generic-asset --link
RUN yarn

WORKDIR /apps
RUN yarn

RUN NODE_ENV=production yarn build

FROM ubuntu:18.04

RUN apt-get update && apt-get -y install nginx
COPY --from=builder /apps/packages/apps/build /var/www/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
