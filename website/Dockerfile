FROM mhart/alpine-node:16

# install dependencies
WORKDIR /website
# COPY ./static/fonts/ ./fonts
COPY package.json package-lock.json ./
RUN npm ci

# Copy all local files into the image.
COPY . .
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