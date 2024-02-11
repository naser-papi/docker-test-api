FROM node:20.11
WORKDIR /api
ADD . .
RUN npm i
CMD ["node","index.js"]