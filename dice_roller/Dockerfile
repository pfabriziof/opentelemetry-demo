FROM node:26-alpine3.23

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY *.ts ./
COPY tsconfig.json ./

# Compile TypeScript to Javascript (outputs to ./dist per tsconfig)
RUN npx tsc

# App port + Prometheus exporter port
EXPOSE 8080
EXPOSE 9464

CMD ["node", "-r", "./dist/instrumentation.js", "./dist/app.js"]


