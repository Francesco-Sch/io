FROM mhart/alpine-node:16

# Set the Node environment to development to ensure all packages are installed
ENV NODE_ENV development

# install dependencies
WORKDIR /website
COPY package.json package-lock.json ./
RUN npm ci

# Copy all local files into the image.
COPY . .

# Expose port 3000 for the SvelteKit app and 24678 for Vite's HMR
EXPOSE 3000
EXPOSE 24678

CMD ["npm", "run", "dev"]

###
# Only copy over the Node pieces we need
# ~> Saves 35MB
###
# FROM mhart/alpine-node:slim-16

# WORKDIR /website
# COPY --from=0 /website .
# COPY . .
# CMD ["npm", "run", "dev"]