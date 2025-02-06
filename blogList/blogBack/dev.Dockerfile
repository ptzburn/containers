FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY controllers ./controllers
COPY models ./models
COPY utils ./utils
COPY app.js ./
COPY index.js ./

CMD ["npm", "run", "dev", "--", "--host"]