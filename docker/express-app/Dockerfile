# FROM -> Build this image from the specified image
FROM node:19-alpine

# COPY -> Copies files/directories from <src> and adds them to the file system to the container at the path <dest>
# While "RUN" is executed in the container, "COPY" is executed on the host
COPY package.json /app/
COPY src /app/

# Sets the working directory for all following commands
# Like changing into a directory: "cd ..."
WORKDIR /app

# RUN -> Will execute any command in a shell inside the container environment
RUN npm install

EXPOSE 3000

# The intruction that is to be executed when a Docker container starts
# There can only be a "CMD" command in a Dockerfile
CMD ["npm", "start"]