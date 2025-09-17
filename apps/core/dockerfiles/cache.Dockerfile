# cache.Dockerfile

# Use the official lightweight Redis image
FROM redis:7-alpine

# Set a working directory
WORKDIR /data

# Copy a Redis config file if you want to customize persistence, security, etc.
# (Optional — only include if you have redis.conf)
# COPY redis.conf /usr/local/etc/redis/redis.conf

# Expose the default Redis port
EXPOSE 6379

# Start Redis with a custom config if provided, otherwise default
# CMD ["redis-server", "/usr/local/etc/redis/redis.conf"]
CMD ["redis-server", "--appendonly", "yes"]
