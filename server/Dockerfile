FROM node:alpine

WORKDIR /app/
COPY package.json ./
RUN npm install
RUN npm install express-validator
RUN npm install cors


COPY . .

ENTRYPOINT ["node", "server.js"]
