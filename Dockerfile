# Use Java 17 base image (works best with Spring Boot)
FROM eclipse-temurin:17-jdk-alpine

# Create work directory
WORKDIR /app

# Copy Maven wrapper and related files
COPY .mvn/ .mvn
COPY mvnw .
COPY pom.xml .

# Download dependencies
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline -B

# Copy source code
COPY src ./src

# Build the application
RUN ./mvnw clean package -DskipTests

# Expose (Render will override)
EXPOSE 8080

# Run the JAR file (your exact JAR name)
CMD ["java", "-jar", "target/expense-tracker-0.0.1-SNAPSHOT.jar"]
