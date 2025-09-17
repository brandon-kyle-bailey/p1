# db.Dockerfile

# Use the official Postgres image
FROM postgres:17-alpine

# Set environment variables (can be overridden at runtime)
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres

# Expose the default Postgres port
EXPOSE 5432

# Copy initialization scripts (optional)
# Any .sql or .sh file in /docker-entrypoint-initdb.d/ will run on first startup
# COPY init.sql /docker-entrypoint-initdb.d/

# Data will be persisted in a volume mounted at /var/lib/postgresql/data
