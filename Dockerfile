# install nodejs version 16
FROM node:16

# create directory /app if not exist
RUN mkdir -p /app

# change working directory to /app
WORKDIR /app

# salin package.json dan package-lock.json
COPY package*.json .

# npm install
RUN npm install

# copy all source to docker
COPY . .

# dokumentasi untuk oranglain tau bahwa port yang di expose adalah 8080
EXPOSE 8080

# run command
CMD [ "npm", "run", "start" ]