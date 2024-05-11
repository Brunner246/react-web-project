FROM node:21

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3003

CMD [ "npm", "start" ]

# docker build -t backend .
# docker run --rm -p 3003:3003 backend