# cennznet/ui

## Get started

- run `docker pull cenznet/cennznet:1.0.0-rc2` and `docker pull cennznet/ui:latest`;
- run `docker run -p 9944:9944 -p 9933:9933 cenznet/cennznet:1.0.0-rc2 --dev --unsafe-ws-external --unsafe-rpc-external`;
- run `docker run --rm -it --name cennznet-ui -p 3000:80 cennznet/ui:latest`;
- browse `localhost:3000`;

## Get started

Run `cd cennznet`

Run `./scripts/start_test.sh`

Visit <http://localhost:4662> from browswer to start cennznet-ui

Go to cennznet-ui settings section, config connecting to <ws://localhost:9944>

## Test changes in cennznet/api.js

Push changes to branch named like `test-with-cennznet-ui` in cennznet/api.js;

Update `./cennznet/cennznet_apps_Dockerfile` like `RUN git clone -b test-with-cennznet-ui --single-branch https://github.com/cennznet/api.js.git .`

Repeat steps defined in `Get started` steps

## Development

Generally, we try to make minimum changes to get it work with cennznet; Ideally, we just need to modify `packages/react-api/src/Api.tsx`, or even we could only add `cennznet` types in `package/react-api/src/overrides/spec/`;
