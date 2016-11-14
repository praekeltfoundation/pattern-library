FROM node:6-onbuild
MAINTAINER Praekelt.org <dev@praekelt.org>

RUN mkdir /opt/pattern-lab
COPY . /opt/pattern-lab/

WORKDIR /opt/pattern-lab
RUN npm install --silent

COPY /docker/plugin-node-tab/package.json /opt/pattern-lab/node_modules/plugin-node-tab/

CMD ["./node_modules/.bin/gulp", "patternlab:serve"]

# VOLUME /opt/pattern-lab/source

EXPOSE 3000 3001
