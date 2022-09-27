FROM node:16

ENV NODE_ENV=development

EXPOSE 3000

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "start" ]
