# build stage
FROM node:lts-alpine as builder

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

# final stage
FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
