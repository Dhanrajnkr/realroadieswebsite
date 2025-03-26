# Step 1: Use an official Node.js runtime as the base image
FROM node:18-alpine AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) first to leverage Docker caching
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all project files to the container
COPY . .
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

# Step 6: Build the Vite app (output will be in /app/dist)
RUN npm run build

# Step 7: Use a lightweight Nginx image to serve the built files
FROM nginx:alpine

# Step 8: Copy built files from the previous build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose port 80 to make the app accessible
EXPOSE 80

# Step 10: Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
