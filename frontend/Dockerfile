# Use an official Node.js LTS version as the base image
FROM node:lts-alpine as build
RUN npm install -g pnpm

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN pnpm install

# Copy the entire project to the working directory
COPY . .

ENV API_HOST=backend PORT=8080

# Build the project
RUN npm run build

# Use a smaller base image for production
FROM nginx:alpine

# Copy the built files from the previous stage to the nginx web root directory
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to allow incoming traffic
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
