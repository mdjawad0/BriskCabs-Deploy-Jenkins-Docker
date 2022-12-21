#stage 1
FROM node:alpine as cab
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
EXPOSE 4200
CMD ["npm","start"]

#stage 2
FROM nginx:alpine as brisk-cabs
COPY --from=cab /app/dist/brisk_cabs /usr/share/nginx/html
