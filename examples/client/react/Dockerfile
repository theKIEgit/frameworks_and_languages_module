FROM node:alpine

WORKDIR /app/

COPY my-app/package.json .
RUN npm install

COPY my-app/ .

CMD ["npm", "start"]
