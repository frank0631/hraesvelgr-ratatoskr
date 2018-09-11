FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY public .
COPY dist .
COPY *.js .

EXPOSE 80
CMD [ "npm", "prod" ]