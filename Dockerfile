FROM node:12.18.1

COPY ["package.json", "index.js", "config.js", "./"]

RUN npm install
CMD [ "node", "." ]