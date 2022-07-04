FROM mhart/alpine-node:16

# install dependencies
WORKDIR /website
COPY package.json package-lock.json ./
RUN npm ci

# Copy all local files into the image.
COPY . .
COPY /static/fonts ./fonts

RUN npm run build

###
# Only copy over the Node pieces we need
# ~> Saves 35MB
###
FROM mhart/alpine-node:slim-16

WORKDIR /website
COPY --from=0 /website .
COPY . .

EXPOSE 3000
CMD ["node", "./build"]