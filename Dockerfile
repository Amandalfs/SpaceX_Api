FROM node:16

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

RUN npm install -g ts-node

COPY . .

RUN npx prisma generate

EXPOSE 8020

CMD ["npm", "run", "start"]