# Fetching the latest node image on alpine linux
FROM node:alpine AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package*.json /react-app

RUN npm install

RUN npm i -g serve

# Copying all the files in our project
COPY . .

EXPOSE 3000

# Starting our application
CMD [ "serve", "-s", "dist" ]