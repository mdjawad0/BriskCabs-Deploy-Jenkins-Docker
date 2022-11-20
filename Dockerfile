#stage 1
FROM node:alpine as cabImage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

#stage 2
FROM nginx:alpine
COPY --from=cabImage /app/build /usr/share/nginx/html
