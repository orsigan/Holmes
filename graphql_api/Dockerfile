FROM node:latest

WORKDIR /app

RUN npm init es6 --yes
RUN npm install @neo4j/graphql graphql neo4j-driver @apollo/server graphql-tag dotenv
RUN npm install typescript @types/node

COPY ./src ./src

RUN npx tsc

CMD ["node", "dist/server.js"]
