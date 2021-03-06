FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm set registry http://artifact.frank0631.com:4873
RUN npm install --only=production
COPY public ./public/
COPY dist ./dist/
COPY *.js ./

EXPOSE 80
CMD [ "npm", "run", "prod" ]