FROM node:20-slim

USER node

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

RUN npm install

EXPOSE 3000

CMD ["node", "app.mjs"]
# CMD ["tail", "-f", "/dev/null"]

