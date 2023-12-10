FROM node:14

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y git

COPY package*.json ./

RUN npm install

COPY . .

RUN git submodule init && git submodule update

EXPOSE 3000

CMD [ "npm", "run", "test" ]
