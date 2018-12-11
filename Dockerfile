FROM node:8
COPY ./package.json /app/package.json
WORKDIR /app
RUN npm install .
COPY ./ /app
RUN npm run build
ENTRYPOINT cd /app && node backend/bin/www
