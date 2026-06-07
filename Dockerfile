FROM docker.io/oven/bun:latest

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install

COPY . .

# RUN chown -R 1000:1000 /app

# USER 1000

EXPOSE 8080

CMD ["bun", "run", "start"]