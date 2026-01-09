# backend/Dockerfile - Forces Java 17
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /app

# Copy Maven wrapper (if you have it)
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src ./src

# Build explicitly with Java 17
RUN chmod +x mvnw && \
    ./mvnw clean package -DskipTests \
    -Dmaven.compiler.source=17 \
    -Dmaven.compiler.target=17 \
    -Dmaven.compiler.release=17

# Runtime with Java 17
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]