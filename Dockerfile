FROM node:16

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 8020

CMD ["npm", "start"]