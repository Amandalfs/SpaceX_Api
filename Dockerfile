FROM node:16

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

RUN npm install -g ts-node

COPY . .

RUN npx prisma generate

RUN npm run migrate:run

EXPOSE 8020

CMD ["npm", "run", "dev"]