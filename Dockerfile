
FROM node:21-alpine3.17

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Expondo porta 5000
EXPOSE 5000

# Rodando servidor
CMD [ "node", "server.js" ]

# 1. Buildar imagem docker
# docker build -t quatro-em-linha-backend-img .

# 2. Rodar container com imagem criada comunicando com porta local
# docker run --name quatro-em-linha-backend-container -p 5000:5000 quatro-em-linha-backend-img

# ** Rodar docker com terminal iterativo || apenas se necessário checar alguma coisa..
# docker run --rm --name teste -it testing-node-1 /bin/sh