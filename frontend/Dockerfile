FROM node

WORKDIR .

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 

COPY . .

CMD ["yarn", "dev"]