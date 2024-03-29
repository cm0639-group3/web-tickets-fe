FROM node:18

WORKDIR /app

COPY . .

RUN npm install serve -g

RUN npm install

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "serve"]
