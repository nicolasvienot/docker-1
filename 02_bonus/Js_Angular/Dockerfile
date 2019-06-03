FROM node:alpine AS builder

WORKDIR /app

COPY ./app/package*.json /app/

RUN npm install

COPY ./app /app/

RUN $(npm bin)/ng build 

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# docker build -t dfreact .
# docker run --rm -d -p 90:80/tcp --name myreact dfreact