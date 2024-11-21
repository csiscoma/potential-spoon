# Stage 1: Build the Vue.js application
FROM node:18 AS build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Clear npm cache and set registry
RUN npm cache clean --force && npm config set registry https://registry.npmjs.org/

# Install dependencies using npm ci
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the built files using Nginx
FROM nginx:stable-alpine AS production-stage

# Copy the built files from the build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]