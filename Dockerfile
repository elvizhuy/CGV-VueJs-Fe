
FROM node:14-alpine


WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install


COPY . .


RUN npm run build


EXPOSE 8080

# Command to run the application
CMD ["npm", "run", "serve"]
