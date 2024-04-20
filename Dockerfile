FROM node:20 AS build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
FROM ubuntu:23.10
RUN apt-get update && apt-get install nginx -y && apt-get clean
COPY --from=build /app/dist /var/www/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
