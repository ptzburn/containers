FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY public ./public
COPY src ./src
COPY index.html ./
COPY testSetup.js ./
COPY vite.config.js ./

CMD ["npm", "run", "dev", "--", "--host"]