# backend/Dockerfile
# Build stage
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /app

# Copy Maven files
COPY pom.xml .
# Download dependencies (cache if pom.xml hasn't changed)
RUN mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Create non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Copy the built jar
COPY --from=builder --chown=appuser:appgroup /app/target/*.jar app.jar

# Expose port (Render uses $PORT environment variable)
ENV PORT=8080
EXPOSE $PORT

# Run with environment-based port
ENTRYPOINT ["sh", "-c", "java -Dserver.port=${PORT} -jar app.jar"]