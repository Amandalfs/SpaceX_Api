FROM node:16

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm migraterun

EXPOSE 8020

CMD ["npm", "run", "dev"]