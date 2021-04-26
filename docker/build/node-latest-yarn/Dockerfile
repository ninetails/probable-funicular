FROM node:latest
ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY ../../.. .

RUN yarn

RUN yarn lint

RUN yarn test

RUN yarn build

CMD ["yarn", "start"]
