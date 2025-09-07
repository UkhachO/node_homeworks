FROM node:20-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache python3 make g++ netcat-openbsd

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY .sequelizerc .sequelizerc
COPY src ./src

ENV NODE_ENV=production
EXPOSE 3000

CMD sh -c '\
  until nc -z "$DB_HOST" 3306; do \
    echo "⏳ waiting for $DB_HOST:3306..."; sleep 2; \
  done; \
  npx sequelize-cli db:migrate \
    --env development \
    --config src/config/config.cjs \
    --migrations-path src/migrations \
    --models-path src/models \
    --seeders-path src/seeders && \
  node src/server.js'
