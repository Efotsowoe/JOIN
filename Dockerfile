# Use the official Nginx image as the base image
FROM nginx:latest

# Copy the static files to the Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose port 80 to be able to access the app
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
