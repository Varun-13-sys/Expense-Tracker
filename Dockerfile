# Use Java 21 base image (compatible with your project)
FROM eclipse-temurin:21-jdk

# Create working directory
WORKDIR /app

# Copy Maven wrapper and build files
COPY .mvn/ .mvn
COPY mvnw .
COPY pom.xml .

# Download dependencies (offline download)
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline -B

# Copy project source code
COPY src ./src

# Build application (skip tests)
RUN ./mvnw clean package -DskipTests

# Expose port (Render sets PORT env internally)
EXPOSE 8080

# Auto-detect and run the generated JAR file
CMD ["sh", "-c", "java -jar target/*.jar"]
