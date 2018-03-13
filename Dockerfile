FROM node:9.8

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY src ./src/
COPY public ./public
COPY *.js ./

RUN set -ex; \
  if [ "$NODE_ENV" = "production" ]; then \
  yarn install --no-cache --frozen-lockfile --production; \
  else \
  yarn install; \
  fi;

ARG UID=1000
RUN id $UID &>/dev/null || useradd -d /home -u $UID user
USER $UID

CMD [ "yarn", "build" ]
