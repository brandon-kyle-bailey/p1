# service.Dockerfile (inside dockerfiles/)
FROM node:22-alpine

WORKDIR /app

# Copy package files from build context (root)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy everything from build context
COPY . .

# Build NestJS
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
